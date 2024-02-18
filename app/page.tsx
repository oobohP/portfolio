import { Backend } from "@/components/Backend";
import { Content } from "@/components/Content";
import { Frontend } from "@/components/Frontend";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";


export default function Home() {
  return (
    <main>
      <Header />
      <Content
        backend={<Backend />}
        fullstack={<Hero />}
        frontend={<Frontend />}
      />
    </main>
  );
}
