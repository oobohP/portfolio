import { groq } from "next-sanity";

export const getAllBlogs = groq`*[_type == "post"] | order(publishedAt desc){
  _id,
  "slug": slug.current,
  title,
  subtitle,
  body,
  publishedAt,
  "mainImage": mainImage.asset->url,
}`;

export const getBlog = groq`*[_type == "post" && slug.current == $slug] | order(publishedAt desc) {
  _id,
  author->{name, "image": image.asset->url},
  title,
  subtitle,
  body,
  publishedAt,
  "mainImage": mainImage.asset->url,
}[0]`;
