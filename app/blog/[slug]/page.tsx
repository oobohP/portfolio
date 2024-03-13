import Image from "next/image";
import { Post } from "@/lib/interfaces/Post";
import { PortableText } from "@portabletext/react";
import { sanityFetch } from "@/sanity/sanity-utils";
import { getAllBlogs, getBlog } from "@/sanity/sanity-queries";
import PortableTextComponents from "@/components/Blog/PortableTextComponents";
import EmailSignUpForm from "@/components/Blog/EmailSignUp/EmailSignUpForm";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const blogPosts: Post[] = await sanityFetch({
    query: getAllBlogs,
    tags: ["post"],
  });

  return blogPosts.map((post) => ({
    params: { slug: post.slug },
  }));
}

export default async function Page({ params }: PageProps) {
  const blogPost: Post = await sanityFetch({
    query: getBlog,
    tags: ["post"],
    queryParams: { slug: params.slug },
  });

  return (
    <div className="container my-6 h-screen">
      <header className="mb-6 items-center justify-between md:flex md:flex-row">
        <h1 className="text-5xl font-extrabold drop-shadow">{blogPost.title}</h1>
        <div className="flex items-center gap-2 md:mt-4">
          {blogPost.author?.image && (
            <Image
              width={50}
              height={50}
              src={`${blogPost.author?.image}?h=50&w=50&fit=crop`}
              alt={`${blogPost.author?.name}'s profile image`}
              className="rounded-full border shadow-sm"
            />
          )}
          <span className="mr-2">{blogPost.author?.name}</span>
        </div>
      </header>

      <div className="mb-6">
        <Image
          src={
            blogPost.mainImage
              ? `${blogPost.mainImage}?w=1920&h=1080&fit=crop`
              : "https://placehold.co/1920x1080"
          }
          alt={`${blogPost.title}'s cover image`}
          width={1920}
          height={1080}
          className="rounded-xl object-cover"
        />
      </div>

      <div className="break-words text-lg tracking-tight pb-6">
        <section>
          <PortableText value={blogPost.body} components={PortableTextComponents} />
        </section>
      </div>

      <EmailSignUpForm />
    </div>
  );
}
