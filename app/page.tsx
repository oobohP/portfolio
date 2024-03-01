import { Suspense } from "react";
import { Hero } from "@/components/Hero/Hero";
import { BlogHero } from "@/components/Blog/BlogHero";
import { BlogItemSkeleton } from "@/components/BlogItemSkeleton";

export default function Home() {
  return (
    <main>
      <Hero />
      <Suspense fallback={<BlogItemSkeleton />}>
        <BlogHero />
      </Suspense>
    </main>
  );
}
