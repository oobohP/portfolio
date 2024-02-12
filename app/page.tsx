import { Backend } from "@/components/Backend";
import { Content } from "@/components/Content";
import { Frontend } from "@/components/Frontend";
import { Fullstack } from "@/components/Fullstack";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <Content
        backend={<Backend />}
        fullstack={<Fullstack />}
        frontend={<Frontend />}
      />
    </main>
  );
}
