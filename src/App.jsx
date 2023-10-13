import ContactUs from "./components/ContactUs/ContactUs";
import SliderComponent from "./components/Customers/Customers";
import Hero from "./components/Hero/Hero";
import Layout from "./components/Layout/Layout";
import OurExperts from "./components/OurExperts/OurExperts";
import OurServices from "./components/OurServices/OurServices";
import OurVision from "./components/OurVision/OurVision";
import Onboarding from "./components/on-boarding/Onboarding";
import { BAKERS, CUSTOMERS, PARTNERS } from "./constants/data";

function App() {
  return (
    <>
      <Layout>
        <Hero />
        <OurVision />
        <OurExperts />
      </Layout>
      <ContactUs />
      <Layout>
        <OurServices />
        <Onboarding />

        <SliderComponent title="SOME OF OUR CUSTOMERS" images={CUSTOMERS} />
        <SliderComponent title="WE ARE BACKERS" images={BAKERS} />
        <SliderComponent
          title="PARTNERS"
          images={PARTNERS}
          buttonTitle="Become a partner"
        />
      </Layout>
    </>
  );
}

export default App;
