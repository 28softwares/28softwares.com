import { Card, CardHeader, CardTitle, CardContent } from "@/UI/shadcn/ui/card";
import { cn } from "@/UI/shadcn/utils";
import { motion } from "framer-motion";


export const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen self-center pt-10  justify-center gap-y-10 md:gap-y-36">
      <div className="self-center text-center">
        <h1 className=" text-5xl md:text-9xl uppercase font-extrabold font-protest bg-gradient-to-r from-red-500 to-green-600 bg-clip-text text-transparent">
          28 Softwares
        </h1>
        <h1 className="md:text-4xl font-lato">
          "Building Tomorrow’s Digital Experiences Today."
        </h1>
      </div>
      <div className="self-center px-2 grid md:grid-cols-3 gap-12 ">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Card
            className={cn(
              " h-full rounded-xl  py-5  border-dotted bg-[#262e38] text-white dark:bg-transparent md:w-full lg:w-[400px] lg:h-[250px] mx-auto self-center justify-center"
            )}
          >
            <CardHeader>
              <CardTitle className="self-center text-green-600 text-center ">
                Pioneering Innovation
              </CardTitle>
            </CardHeader>
            <CardContent className="self-center text-md text-center font-lato text-gray-400">
              Our team of veteran developers excels in turning complex ideas
              into robust solutions. Leveraging cutting-edge technology, we
              ensure your software stands out in a competitive landscape.
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <Card
            className={cn(
              " h-full rounded-xl  py-5 border-dotted bg-[#262e38] text-white dark:bg-transparent md:w-full lg:-w-[400px] lg:h-[250px] mx-auto self-center justify-center"
            )}
          >
            <CardHeader>
              <CardTitle className="self-center text-green-600 text-center">
                Expertise You Can Trust
              </CardTitle>
            </CardHeader>
            <CardContent className="self-center text-md text-center font-lato text-gray-400">
              Our development team combines deep experience with cutting-edge
              tools to deliver software that’s reliable, scalable, and
              future-ready. We turn your vision into a reality with precision
              and expertise.
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
        >
          <Card
            className={cn(
              " h-full rounded-xl  py-5 border-dotted bg-[#262e38] text-white dark:bg-transparent md:w-full lg:-w-[400px] lg:h-[250px] mx-auto self-center justify-center"
            )}
          >
            <CardHeader>
              <CardTitle className="self-center text-green-600 text-center">
                Excellence in Every Line of Code
              </CardTitle>
            </CardHeader>
            <CardContent className="self-center text-md text-center font-lato text-gray-400">
              We build solutions that are as innovative as they are reliable. We
              turn your vision into a reality with precision and expertise.
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};
