import Hero from "./components/Hero/Hero";
import Layout from "./components/Layout/Layout";
import Navbar from "./components/Navbar/Navbar";
import OurVision from "./components/OurVision/OurVision";

function App() {
  return (
    <Layout>
      <Navbar />
      <Hero />
      <OurVision />
    </Layout>
  );
}

export default App;
