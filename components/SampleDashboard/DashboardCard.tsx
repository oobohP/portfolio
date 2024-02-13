import Link from "next/link";
import { ReactNode } from "react";

export const DashboardCard = ({ header, children }: { header: string; children: ReactNode }) => {
  return (
    <div className="w-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950">
      <Link className="block transition-opacity hover:opacity-75" href="#">
        <div className="grid gap-1 p-4">
          <h2 className="line-clamp-1 text-lg font-semibold">{header}</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">{children}</p>
        </div>
      </Link>
    </div>
  );
};
