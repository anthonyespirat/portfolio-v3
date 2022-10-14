import { MarkdownInstance } from "astro";
import type { PostFrontmatter } from "../../pages/index.astro";

export default function Creations({
  posts,
}: {
  posts: MarkdownInstance<PostFrontmatter>;
}) {
  return (
    <div className="">
      <div className="text-center">
        <h2 className="text-3xl mb-2 font-medium">
          <span className="text-primary">M</span>es créations
        </h2>
        <p>Découvrez mes plus récentes créations</p>
      </div>
    </div>
  );
}
