
import { ReactNode } from 'react';

interface PortfolioHeroProps {
  header?: string;
  description?: string;
  children?: ReactNode;
}

export function PortfolioHero({ header, description, children }: PortfolioHeroProps) {
  return (
    <section className="mt-6 w-full">
      <div className="container space-y-10 xl:space-y-16">
        <div className="grid gap-4 px-10 md:grid-cols-2 md:gap-16">
          <div>
            <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
              {header ? header : "Placeholder Header Text"}
            </h1>
          </div>
          <div className="flex flex-col space-y-4">
            <p className="max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
              {description ? description : "Empty Description Text"}
            </p>
            <div className="space-x-4"></div>
          </div>
        </div>
        {children ? (
          children
        ) : (
          <img
            alt="Hero"
            className="mx-auto aspect-[3/1] overflow-hidden rounded-t-xl object-cover"
            height="300"
            src="/placeholder.svg"
            width="1270"
          />
        )}
      </div>
    </section>
  );
}
