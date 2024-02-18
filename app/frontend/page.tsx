
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FrontendDrawer } from "@/components/FrontendDrawer";
import { DashboardCard } from "@/components/SampleDashboard/DashboardCard";
import { SampleDashboard } from "@/components/SampleDashboard/SampleDashboard";
import { SampleForm } from "@/components/SampleForm/SampleForm";
import { PortfolioList } from "@/components/PortfolioHero/PortfolioList";


const Page = () => {
  return (
    <div>
      <div className="flex h-screen flex-col">
        <div className="flex-1 bg-gray-100 p-4 dark:bg-gray-800">
          <div className="container items-start justify-between gap-4 p-4 md:grid md:grid-cols-2 lg:flex lg:gap-6 xl:grid-cols-3">
            <FrontendDrawer
              trigger={
                <DashboardCard header="Responsive Dashboards" className="animate-slight-bounce">
                  Custom built anayltics and third party integrations.
                </DashboardCard>
              }
              content={<SampleDashboard />}
            ></FrontendDrawer>

            <Dialog>
              <DialogTrigger asChild>
                <DashboardCard header="Forms">
                  This deserves its own card, it's just that complex.
                </DashboardCard>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Forms are complicated</DialogTitle>
                  <DialogDescription>
                    I make it so it doesn't have to be. <br />
                    With my experience in simplifying user workflows. The less forms we use the
                    better, for everyone.
                  </DialogDescription>
                </DialogHeader>
                <SampleForm />
              </DialogContent>
            </Dialog>
          </div>

          <Carousel className="container">
            <h1 className="my-4 rounded-md bg-gradient-to-r from-gray-200 via-gray-300 to-gray-500 py-2 text-center text-2xl font-semibold text-gray-800 shadow-md">
              Development Portfolio
            </h1>

            <CarouselPrevious />
            <CarouselContent>
              {PortfolioList.map((portfolioItem, index) => {
                return <CarouselItem key={index}>{portfolioItem}</CarouselItem>;
              })}
            </CarouselContent>
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Page;