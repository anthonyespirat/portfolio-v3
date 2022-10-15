import { MarkdownInstance } from "astro";
import Creation from "./Creation";
import type { PostFrontmatter } from "../../pages/index.astro";

export default function Creations({
  posts,
}: {
  posts: MarkdownInstance<PostFrontmatter>[];
}) {
  console.log(posts);

  return (
    <>
      <div className="">
        <div className="text-center">
          <h2 className="text-3xl mb-2 font-medium">
            <span className="text-primary">M</span>es créations
          </h2>
          <p>Découvrez mes plus récentes créations</p>
        </div>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-3">
        {posts.map((post) => (
          <Creation post={post} />
        ))}
      </section>
    </>
  );
}
