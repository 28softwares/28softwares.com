import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/UI/shadcn/ui/accordion";
import { Layout } from "../Layout";

export function Faq() {
  return (
    <Layout>
        <div className="self-center w-4/5 mx-auto p-5 md:p-10">
            <h1 className="text-7xl underline font-lato">Frequently Asked Questions</h1>
        </div>
      <Accordion
        type="single"
        collapsible
        className="w-4/5 self-center mx-auto p-10 space-y-12 dark:text-white text-black"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-2xl dark:text-white text-black">
            What is the typical timeline for developing a website?
          </AccordionTrigger>
          <AccordionContent className="text-xl">
            The timeline for developing a website can vary based on the
            complexity and features required. A simple website may take 4-6
            weeks, while a more complex site with custom features may take 8-12
            weeks or longer. We work closely with you to establish a timeline
            that meets your needs.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-2xl dark:text-white text-black">
            Do you offer website maintenance after the site is launched?
          </AccordionTrigger>
          <AccordionContent className="text-xl">
            Yes, we offer ongoing website maintenance services to ensure your
            site remains secure, up-to-date, and functional. Our maintenance
            packages include regular updates, backups, and performance
            optimization.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-2xl dark:text-white text-black">
            Can you redesign our existing website?
          </AccordionTrigger>
          <AccordionContent className="text-xl">
            Absolutely! We specialize in website redesigns, improving both the
            aesthetics and functionality of your current site while ensuring it
            meets modern design standards and user expectations.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-2xl dark:text-white text-black">
            Do you develop apps for both iOS and Android?
          </AccordionTrigger>
          <AccordionContent className="text-xl">
            Yes, we develop mobile apps for both iOS and Android platforms. We
            can create native apps tailored to each platform or develop
            cross-platform apps using frameworks like React Native or Flutter.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="text-2xl dark:text-white text-black">
            Will you help us with app store submissions?
          </AccordionTrigger>
          <AccordionContent className="text-xl">
            Yes, we handle the entire app store submission process for both iOS
            and Android. This includes preparing the app for submission,
            creating app store listings, and guiding you through the approval
            process.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger className="text-2xl dark:text-white text-black">
            How much does it cost to develop a website or mobile app?
          </AccordionTrigger>
          <AccordionContent className="text-xl">
            The cost depends on the complexity of the project, the number of
            features, and the platforms involved. After an initial consultation,
            we provide a detailed quote based on your specific needs and budget.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger className="text-2xl dark:text-white text-black">
            Will I own the source code and design assets after the project is
            completed?
          </AccordionTrigger>
          <AccordionContent className="text-xl">
            Yes, once the project is completed and the final payment is made,
            you will own all the source code and design assets. We provide you
            with everything you need to manage and scale your project in the
            future.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-8">
          <AccordionTrigger className="text-2xl dark:text-white text-black">
            Do you offer post-launch support?
          </AccordionTrigger>
          <AccordionContent className="text-xl">
            Yes, we offer post-launch support to ensure everything runs smoothly
            after the project goes live. This can include troubleshooting,
            updates, and additional feature development based on your needs.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Layout>
  );
}
