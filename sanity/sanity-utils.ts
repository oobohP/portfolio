import { createClient, ClientConfig, QueryParams } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'


const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-02-21'

const config: ClientConfig = {
  projectId,
  dataset,
  apiVersion,
  useCdn: true // `false` if you want to ensure fresh data every load
}

export const sanityClient = createClient(config)

export async function sanityFetch<QueryResponse>({
  query,
  queryParams = {},
  tags,
}: {
  query: string;
  queryParams?: QueryParams;
  tags: string[];
}): Promise<QueryResponse> {
  return sanityClient.fetch<QueryResponse>(query, queryParams, {
    cache: "force-cache",
    next: { tags },
  });
}

const builder = imageUrlBuilder(sanityClient);

// Helper function to generate image URLs from Sanity image asset references
export function buildSanityURL(source: string) {
  return builder.image(source)
}