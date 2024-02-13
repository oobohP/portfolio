
import { DashboardCard } from "./SampleDashboard/DashboardCard";
import { SampleDashboard } from "./SampleDashboard/SampleDashboard";

export const Frontend = () => {
  return (
    <div>
      {/* <SampleDashboard /> */}

      <div className="flex h-screen flex-col">
        <div className="flex-1 bg-gray-100 p-4 dark:bg-gray-800">
          <div className="container grid h-full items-start gap-4 p-4 md:grid-cols-2 lg:gap-6 xl:grid-cols-3">
            <DashboardCard header="Responsive Dashboards">
              Live data tracking, analytics in real-time.
            </DashboardCard>
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
