import { Contact } from "./Contact";
import { Layout } from "../Layout";
import { Footer } from "./Footer";
import { Services } from "./Services";
import { LandingPage } from "./LandingPage";

export const Home = () => {
  return (
    <Layout>
      <div className="min-h-screen overflow-hidden">
        <LandingPage />
        <Services />
        <Contact />
        <Footer />
      </div>
    </Layout>
  );
};
