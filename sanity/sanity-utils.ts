import { createClient } from 'next-sanity'
import { Post } from '@/lib/interfaces/Post'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-02-21'

const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false // `false` if you want to ensure fresh data every load
})

export const getBlogs = async (): Promise<Post[]> => {
  return sanityClient.fetch(
    `*[_type == "post"] | order(publishedAt desc){
      _id,
      "slug": slug.current,
      title,
      subtitle,
      body,
      publishedAt,
      "mainImage": mainImage.asset->url,
    }`,
  )
}

export const getBlog = async (slug: string): Promise<Post> => {
  return sanityClient.fetch(
    `*[_type == "post" && slug.current == $slug] | order(publishedAt desc) {
      _id,
      author->{name, "image": image.asset->url},
      title,
      subtitle,
      body,
      publishedAt,
      "mainImage": mainImage.asset->url,
    }[0]`,
    { slug }
  )
}

export default sanityClient;
