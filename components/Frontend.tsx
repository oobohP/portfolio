import { DashboardCard } from "./SampleDashboard/DashboardCard";
import { SampleDashboard } from "./SampleDashboard/SampleDashboard";
import { FrontendDrawer } from "./FrontendDrawer";

export const Frontend = () => {
  return (
    <div>
      <div className="flex h-screen flex-col">
        <div className="flex-1 bg-gray-100 p-4 dark:bg-gray-800">
          <div className="container grid h-full items-start gap-4 p-4 md:grid-cols-2 lg:gap-6 xl:grid-cols-3">
            <FrontendDrawer
              trigger={
                <DashboardCard header="Responsive Dashboards">
                  Custom built anayltics and third party integrations.
                </DashboardCard>
              }
              content={<SampleDashboard />}
            ></FrontendDrawer>
            <DashboardCard header="Search Engine Optimization">
              Your currently using something that was optimized SEO.
            </DashboardCard>
            <DashboardCard header="Forms">
              This deserves its own card, it's just that complex.
            </DashboardCard>
          </div>
        </div>
      </div>
    </div>
  );
};
