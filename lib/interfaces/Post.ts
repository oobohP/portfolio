import { PortableTextBlock } from "sanity";

export interface Post {
  _id: string;
  slug: string;
  title: string;
  subtitle: string;
  author?: {name: string, image: string};
  authorImage?: string;
  body: PortableTextBlock[];
  publishedAt: Date;
  mainImage: string;
}
