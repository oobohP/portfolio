/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    domains: [
      'cdn.sanity.io',
      'sanity.io',
      'placehold.co',
    ]
  }
}

export default nextConfig;
