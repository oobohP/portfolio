import Link from "next/link";
import { RoleSelector } from "./RoleSelector";

export const Header = async () => {
  return (
    <header className="mt-5 flex w-full items-center justify-between border-b-2 px-2 pb-4 sm:px-4">
      <Link href="/" className="flex space-x-2">
        <h1 className="ml-1 text-lg font-bold tracking-tight sm:text-2xl">Steven Ly's Developer Portfolio</h1>
      </Link>
      <RoleSelector />
    </header>
  );
};
