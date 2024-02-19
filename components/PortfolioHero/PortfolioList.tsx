import Image from "next/image";
import { PortfolioHero } from "./PortfolioHero";

// Static data for the carousel in Frontend.tsx
export const PortfolioList = [
  <PortfolioHero
    key={1}
    header="Gap Intelligence"
    description="Gap Intelligence is one of the world's most respected business intelligence services company. Giving manufacturers, resellers and industry players a competitive edge in IT, consumer electronics and home appliance industries"
    link="https://www.gapintelligence.com/"
  >
    <Image
      src="/gap.webp"
      height={300}
      width={1270}
      alt="Picture of the Gap Intelligence website"
    />
  </PortfolioHero>,
  <PortfolioHero
    key={2}
    header="Morris Cerullo World Evangelism"
    description="Morris Cerullo World Evangelism is a ministry built on the late Dr Morris Cerullo. The Legacy center was built to honor his work and provide a technological museum for guest to view."
    link="https://mcwe.com/"
  >
    <Image src="/mcwe.webp" height={300} width={1270} alt="Picture of the Morris Cerullo website" />
  </PortfolioHero>,
  <PortfolioHero
    key={3}
    header="Edgewave"
    description="Edgewave (now GoSecure) is a cyber security firm focusing on email threat detection & prevention. Threat actors are always targeting corporations and it all starts with social attacks."
    link="https://www.gosecure.net/"
  >
    <Image src="/gosecure.webp" height={300} width={1270} alt="Picture of the Edgewave website" />
  </PortfolioHero>,
  <PortfolioHero
    key={4}
    header="Anisecret"
    description="Anisecret is a Japanese clothing brand built on top of Shopify's Liquid language. Providing for clients of over 10,000 daily visitors"
    link="https://anisecret.com/"
  >
    <Image src="/anisecret.webp" height={300} width={1270} alt="Picture of the Anisecret website" />
  </PortfolioHero>,
  <PortfolioHero
    key={5}
    header="GetStitched"
    description="GetStitched is a custom embroidery ecommerce brand that generates over $900,000 in income annually. Built and optimized for extreme SEO and fast contentful print"
    link="https://shopgetstitch.com/"
  >
    <Image
      src="/getstitch.webp"
      height={300}
      width={1270}
      alt="Picture of the GetStitched website"
    />
  </PortfolioHero>,
];
