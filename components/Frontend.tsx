import { DashboardCard } from "./SampleDashboard/DashboardCard";
import { SampleDashboard } from "./SampleDashboard/SampleDashboard";
import { FrontendDrawer } from "./FrontendDrawer";
import { SampleForm } from "./SampleForm/SampleForm";

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
import { PortfolioHero } from "./PortfolioHero/PortfolioHero";
import { PortfolioList } from "./PortfolioHero/PortfolioList";

export const Frontend = () => {
  return (
    <div>
      <div className="flex h-screen flex-col">
        <div className="flex-1 bg-gray-100 p-4 dark:bg-gray-800">
          <div className="container grid items-start gap-4 p-4 md:grid-cols-2 lg:gap-6 xl:grid-cols-3">
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

            <DashboardCard header="E-Commerce Portfolio">
              Just like this portfolio, optimized for performance and SEO.
            </DashboardCard>
          </div>

          <Carousel className="container">
            <CarouselContent>
              {PortfolioList.map((portfolioItem, index) => {
                return <CarouselItem key={index}>{portfolioItem}</CarouselItem>;
              })}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};
