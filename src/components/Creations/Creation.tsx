import type { PostFrontmatter } from "../../pages/index.astro";
import { MarkdownInstance } from "astro";

export default function Creation({
  post,
}: {
  post: MarkdownInstance<PostFrontmatter>;
}) {
  return <div>{post.frontmatter.title}</div>;
}
