import ContactUs from "./components/ContactUs/ContactUs";
import Hero from "./components/Hero/Hero";
import Layout from "./components/Layout/Layout";
import Navbar from "./components/Navbar/Navbar";
import OurExperts from "./components/OurExperts/OurExperts";
import OurServices from "./components/OurServices/OurServices";
import OurVision from "./components/OurVision/OurVision";
import Slider from "./components/Slider/Slider";

import Onboarding from "./components/on-boarding/Onboarding";
import { CUSTOMERS } from "./constants/data";

function App() {
  return (
    <>
      <Layout>
        <Navbar />
        <Hero />
        <OurVision />
        <OurExperts />
      </Layout>
      <ContactUs />
      <Layout>
        <OurServices />
        <Onboarding />
        <Slider images={CUSTOMERS} />
      </Layout>
    </>
  );
}

export default App;
