import Link from "next/link";
import Image from "next/image";
import { Post } from "@/lib/interfaces/Post";
import { Card, CardContent } from "../ui/card";

export const BlogItem = ({ title, subtitle, slug, mainImage }: Post) => {
  return (
    <Link href={`/blog/${slug}`}>
      <Card>
        <CardContent className="flex items-start p-6">
          <div className="hidden flex-none sm:block">
            <Image
              src={`${mainImage}?w=200&h=200&fit=crop`}
              width="200"
              height="200"
              alt="thumbnail"
            />
          </div>
          <div className="ml-4 grid gap-1 overflow-auto">
            <h2 className="text-4xl font-bold">{title}</h2>
            <p className="text-md line-clamp-6 text-gray-500">{subtitle}</p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
