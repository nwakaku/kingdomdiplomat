import Footer from "../Utils/Footer";
import Hero from "../Utils/Hero";
import Navbar from "../Utils/Navbar";
import Offering from "../Utils/Offering";
import Services from "../Utils/Services";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Offering />
      <Footer />
    </div>
  );
};

export default LandingPage;
