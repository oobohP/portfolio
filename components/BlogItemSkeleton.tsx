import { Card, CardContent } from "./ui/card";

export const BlogItemSkeleton = () => {
  return (
    <>
    <div className="max-h-600 overflow-scroll scrollbar mx-2">
        <div className="container mb-10">
          <Card className="h-60">
            <CardContent className="flex items-start p-6">
              <div className="hidden flex-none sm:block w-60 h-48 bg-gray-300 animate-pulse" />
              <div className="md:ml-10 grid gap-4 w-full">
                <div className="h-28 bg-gray-300 rounded animate-pulse"></div>
                <div className="h-12 bg-gray-200 rounded animate-pulse"></div>
              </div>
            </CardContent>
          </Card>
          <Card className="h-60 mt-6">
            <CardContent className="flex items-start p-6">
              <div className="hidden flex-none sm:block w-60 h-48 bg-gray-300 animate-pulse" />
              <div className="md:ml-10 grid gap-4 w-full">
                <div className="h-28 bg-gray-300 rounded animate-pulse"></div>
                <div className="h-12 bg-gray-200 rounded animate-pulse"></div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};
