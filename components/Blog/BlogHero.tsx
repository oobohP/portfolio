import { BlogItem } from "./BlogItem";
import { Post } from "@/lib/interfaces/Post";
import { getAllBlogs } from "@/sanity/sanity-queries";
import { sanityFetch } from "@/sanity/sanity-utils";

export async function BlogHero() {
  const blogPosts: Post[] = await sanityFetch({
    query: getAllBlogs,
    tags: ["post"]
  })

  return (
    <div className="container mx-auto mb-4 max-h-600 overflow-scroll px-4 scrollbar">
      <div className="grid gap-4">
        {blogPosts.map((post: Post) => (
          <BlogItem key={post._id} {...post} />
        ))}
      </div>
    </div>
  );
}
