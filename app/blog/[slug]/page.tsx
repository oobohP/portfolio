import Image from "next/image";
import { getBlog } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import PortableTextComponents from "@/components/Blog/PortableTextComponents";

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function Page({ params }: PageProps) {
  const slug = params.slug;
  const blogPost = await getBlog(slug);

  return (
    <div className="container my-10 h-screen">
      <header className="mb-6 items-center justify-between md:flex md:flex-row">
        <h1 className="text-5xl font-extrabold drop-shadow">{blogPost.title}</h1>
        <div className="flex items-center gap-2 md:mt-4">
          <Image
            width={50}
            height={50}
            src={`${blogPost.author?.image}?h=50&w=50&fit=crop`}
            alt={`${blogPost.author?.name}'s profile image`}
            className="rounded-full border shadow-sm"
          />
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

      <div className="break-words text-lg tracking-tight">
        <section>
          <PortableText value={blogPost.body} components={PortableTextComponents} />
        </section>
      </div>
    </div>
  );
}
