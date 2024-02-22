import sanityClient from "@/sanity/sanity-utils";
import { BlogItem } from "./BlogItem";

export async function Blog() {
  // const blogPosts = await sanityClient.fetch(`*[_type == "post"]`);

  // console.log(blogPosts)
  return (
    <div className="container mx-auto px-4 mb-4 overflow-scroll max-h-600">
      <div className="grid gap-4">
        {/* {blogPosts.map((post) => (
          <BlogItem key={post._id} post={post} />
        ))} */}
        <BlogItem />
        <BlogItem />
        <BlogItem />
      </div>
    </div>
  );
}
