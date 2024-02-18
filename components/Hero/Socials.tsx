import Link from "next/link";
import GithubIcon from "../svg/GithubIcon";
import LinkedinIcon from "../svg/LinkedinIcon";

export function Socials() {
  return (
    <section className="w-full border-4 px-4 py-6 md:px-6">
      <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Socials</h2>
      <div className="mt-4 flex justify-center space-x-12">
        <Link target="_blank" href="https://www.linkedin.com/in/sly-dev/">
          <LinkedinIcon className="mx-auto h-12 w-12" label="LinkedIn" />
        </Link>
        <Link target="_blank" href="https://github.com/oobohP">
          <GithubIcon className="mx-auto h-12 w-12" label="GitHub" />
        </Link>
      </div>
    </section>
  );
}
