import { Socials } from "./Socials";
import { HeroButtons } from "./HeroButtons";

export function Hero() {
  return (
    <section className="px-4 py-12 md:mt-24 md:px-6">
      <div className="flex flex-col items-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            Steven Ly
          </h1>
          <h2 className="text-xl tracking-tight sm:text-2xl md:text-3xl">
            Full Stack Software Engineer
          </h2>
          <p className="mx-auto text-lg tracking-tighter text-gray-500 dark:text-gray-400 sm:text-xl md:text-2xl">
            With over 5 years of experience building applications that are scalable, maintainable,
            and user-friendly.
            <br />
            Take a look around to see what I have been working on. Please feel free to reach out to
            me on Linkedin if you have any questions.
          </p>
        </div>
        <div className="space-x-4">
          <HeroButtons />
        </div>
        <Socials />
      </div>
    </section>
  );
}
