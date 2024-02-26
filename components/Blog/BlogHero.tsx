import { BlogItem } from "./BlogItem";
import { Post } from "@/lib/interfaces/Post";
import { getBlogs } from "@/sanity/sanity-utils";

export async function BlogHero() {
  const blogPosts = await getBlogs();

  console.log(blogPosts)
  return (
    <div className="container mx-auto mb-4 max-h-600 overflow-scroll px-4">
      <div className="grid gap-4">
        {blogPosts.map((post: Post) => (
          <BlogItem key={post._id} {...post} />
        ))}
      </div>
    </div>
  );
}
