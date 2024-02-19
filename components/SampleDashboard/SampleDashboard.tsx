import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card";
import HomeIcon from "../svg/HomeIcon";
import ShoppingCartIcon from "../svg/ShoppingCartIcon";
import Package2Icon from "../svg/Package2Icon";
import PackageIcon from "../svg/PackageIcon";
import LineChartIcon from "../svg/LineChartIcon";
import UsersIcon from "../svg/UsersIcon";
import CurvedLineChart from "./CurvedLineChart";
import BarChart from "./CurvedBarChart";
import Image from "next/image";

export function SampleDashboard() {
  return (
    <div className="flex max-h-80 w-full overflow-scroll">
      <div className="hidden border-r bg-gray-100/40 dark:bg-gray-800/40 lg:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4">
            <Link className="flex items-center gap-2 font-semibold" href="#">
              <Package2Icon className="h-6 w-6" />
              <span className="">Company Inc</span>
            </Link>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-start px-4 text-sm font-medium">
              <Link
                className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                href="#"
              >
                <HomeIcon className="h-4 w-4" />
                Home
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <ShoppingCartIcon className="h-4 w-4" />
                Orders
                <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                  6
                </Badge>
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <PackageIcon className="h-4 w-4" />
                Products
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <UsersIcon className="h-4 w-4" />
                Customers
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <LineChartIcon className="h-4 w-4" />
                Analytics
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-gray-100/40 px-4 dark:bg-gray-800/40">
          <Link className="lg:hidden" href="#">
            <Package2Icon className="h-6 w-6" />
            <span className="sr-only">Home</span>
          </Link>
          <h1 className="text-sm font-semibold md:text-base lg:text-xl">Dashboard</h1>
          <Button
            className="ml-auto h-8 w-8 rounded-full border border-gray-200 dark:border-gray-800"
            size="icon"
            variant="ghost"
          >
            <Image
              alt="avatar"
              className="rounded-full"
              height={32}
              width={32}
              src="/placeholder.svg"
            />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Today&apos;s Revenue</CardTitle>
                <CardDescription>Total revenue generated today</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <div className="grid gap-1">
                    <CardTitle className="text-3xl">$2,356.00</CardTitle>
                    <CardDescription className="text-sm">23% higher than yesterday</CardDescription>
                  </div>
                  <BarChart className="aspect-[2/1] w-full max-w-[300px]" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Today&apos;s Orders</CardTitle>
                <CardDescription>Total orders received today</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <div className="grid gap-1">
                    <CardTitle className="text-3xl">320</CardTitle>
                    <CardDescription className="text-sm">12% higher than yesterday</CardDescription>
                  </div>
                  <CurvedLineChart className="aspect-[2/1] w-full max-w-[300px]" />
                </div>
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Recent Orders</CardTitle>
              <CardDescription>
                Here are the most recent orders placed by your customers
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex items-center gap-4">
                  <Image
                    alt="avatar"
                    className="rounded-full object-cover"
                    height={40}
                    width={40}
                    src="placeholder.svg"
                  />
                  <div className="grid gap-1.5">
                    <h3 className="text-sm font-semibold">John Doe</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">#1234567890</p>
                  </div>
                  <div className="ml-auto text-sm">2m ago</div>
                </div>
                <div className="flex items-center gap-4">
                  <Image
                    alt="avatar"
                    className="rounded-full object-cover"
                    height={40}
                    width={40}
                    src="placeholder.svg"
                  />
                  <div className="grid gap-1.5">
                    <h3 className="text-sm font-semibold">Alice Johnson</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">#0987654321</p>
                  </div>
                  <div className="ml-auto text-sm">5m ago</div>
                </div>
                <div className="flex items-center gap-4">
                  <Image
                    alt="avatar"
                    className="rounded-full object-cover"
                    height={40}
                    width={40}
                    src="placeholder.svg"
                  />
                  <div className="grid gap-1.5">
                    <h3 className="text-sm font-semibold">Emma Smith</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">#2468013579</p>
                  </div>
                  <div className="ml-auto text-sm">10m ago</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}
