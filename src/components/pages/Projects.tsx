import { Card, CardContent } from "@/UI/shadcn/ui/card";
import { Layout } from "../Layout";
export const Projects = () => {
  return (
    <Layout>
      <div className="p-10 flex flex-col lg:flex-row gap-x-10">
        <iframe
          className="w-full lg:w-[800px] h-[400px] md:h-[600px] border-4 rounded-3xl"
          src="https://www.investiaa.com/"
        ></iframe>
        <div className="grid gap-10 self-center text-center">
          <a href="https://www.investiaa.com/">
            <h1 className="text-5xl md:text-8xl uppercase underline dark:text-white font-extrabold">
              Investiaa
            </h1>
          </a>
          <Card className="text-center border-dashed dark:text-gray-300 h-12 py-2 font-ubuntu text-lg font-extrabold">
            <CardContent>Web Application</CardContent>
          </Card>
          <p>
            An online ecosystem for startups, connecting incubators, angel
            investors, venture capitalists, and academia for seamless access and
            growth.
          </p>
        </div>
      </div>
    </Layout>
  );
};
