import { Contact } from "./Contact";
import { Layout } from "../Layout";
import { Footer } from "./Footer";
import { Services } from "./Services";

export const Home = () => {
  return (
    <Layout>
      <div className="min-h-screen overflow-hidden">
        <Services />
        <Contact />
        <Footer />
      </div>
    </Layout>
  );
};
