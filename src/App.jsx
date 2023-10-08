import ContactUs from "./components/ContactUs/ContactUs";
import Hero from "./components/Hero/Hero";
import Layout from "./components/Layout/Layout";
import Navbar from "./components/Navbar/Navbar";
import OurExperts from "./components/OurExperts/OurExperts";
import OurVision from "./components/OurVision/OurVision";

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
    </>
  );
}

export default App;
