import Link from "next/link";
import { Button } from "../ui/button";

export const HeroButtons = () => {
  return (
    <>
      <Link href="/frontend">
        <Button variant="outline" className="px-8">
          Frontend
        </Button>
      </Link>
      <Link href="/backend">
        <Button className="px-8">Backend</Button>
      </Link>
    </>
  );
};
