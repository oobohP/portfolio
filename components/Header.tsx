import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export const Header = async () => {
  return (
    <header className="pt-5 flex w-full items-center justify-between border-b-2 px-2 pb-4 sm:px-4 shadow bg-white dark:bg-[#10151c] dark:shadow-2xl">
      <Link href="/" className="flex space-x-2">
        <h1 className="ml-1 text-lg font-bold tracking-tight sm:text-2xl hover:opacity-80">Steven Ly&apos;s Developer Portfolio</h1>
      </Link>
      <ThemeToggle />
    </header>
  );
};
