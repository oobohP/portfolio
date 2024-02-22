import { createClient } from 'next-sanity'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-02-21'

const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false // `false` if you want to ensure fresh data every load
})

export default sanityClient;