import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="px-4 py-12 md:px-6">
      <div className="flex flex-col items-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">Steven Ly</h1>
          <h2 className="text-2xl tracking-tight">Full Stack Software Engineer</h2>
          <p className="mx-auto max-w-[600px] tracking-tighter text-gray-500 dark:text-gray-400 md:text-xl">
            Building applications that are scalable, maintainable, and user-friendly. With over 5
            years of experience, take a look around to see what I have been working on.
          </p>
        </div>
        <div className="space-x-4">
          <Button variant="outline" className="px-8">
            Frontend
          </Button>
          <Button className="px-8">Backend</Button>
        </div>
      </div>
    </section>
  );
}
