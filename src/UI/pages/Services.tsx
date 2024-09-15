import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/UI/shadcn/ui/card";
import { cn } from "@/UI/shadcn/utils";

export const Services = () => {
  return (
    <div>
      <div className="flex flex-col gap-5 p-10 md:flex-row-reverse">
        <Card
          className={cn(
            "h-full rounded-xl border-dotted border-x-red-400 border-y-yellow-600 bg-[#262e38] text-white dark:bg-transparent md:w-[400px] lg:h-[350px]"
          )}
        >
          <CardHeader>
            <CardTitle className="text-center font-ubuntu text-5xl">
              UI/UX Design
            </CardTitle>
            <CardDescription className="self-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-20"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42"
                />
              </svg>
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center font-lato text-lg text-gray-400">
            <p>
              Focusing on user interface (UI) and user experience (UX) design to
              enhance usability and user satisfaction.
            </p>
          </CardContent>
        </Card>
        <Card
          className={cn(
            "h-full rounded-xl border-dotted border-x-red-400 border-y-yellow-600 bg-[#262e38] text-white dark:bg-transparent md:w-full lg:h-[350px]"
          )}
        >
          <CardHeader>
            <CardTitle className="text-center font-ubuntu text-5xl">
              Web Application Development
            </CardTitle>
            <CardDescription className="self-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-36"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
                />
              </svg>
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center font-lato text-lg text-gray-400">
            <p>
              Designing and developing web-based applications for various
              purposes, such as customer portals, booking systems, ERP, and
              interactive tools.
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="flex flex-col gap-5 px-10 md:flex-row">
        <Card
          className={cn(
            "h-full rounded-xl border-dotted border-x-red-400 border-y-yellow-600 bg-[#262e38] text-white dark:bg-transparent md:w-[400px] lg:h-[350px]"
          )}
        >
          <CardHeader>
            <CardTitle className="text-center font-ubuntu text-5xl">
              Maintenance and Support
            </CardTitle>
            <CardDescription className="self-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-20"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
                />
              </svg>
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center font-lato text-lg text-gray-400">
            <p>
              Providing ongoing support, updates, and maintenance services to
              ensure website performance and security.
            </p>
          </CardContent>
        </Card>
        <Card
          className={cn(
            "h-full rounded-xl border-dotted border-x-red-400 border-y-yellow-600 bg-[#262e38] text-white dark:bg-transparent md:w-full lg:h-[350px]"
          )}
        >
          <CardHeader>
            <CardTitle className="text-center font-ubuntu text-5xl">
              Mobile Application Development
            </CardTitle>
            <CardDescription className="self-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-36"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                />
              </svg>
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center font-lato text-lg text-gray-400">
            <p>
              We specialize in creating mobile applications tailored to your
              specific business needs, allowing customers to manage their
              profiles, track orders, and access services directly from their
              smartphones.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
