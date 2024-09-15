import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { Services } from "./Services";
import { LandingPage } from "./LandingPage";
import { Layout } from "./Layout";

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
