import Footer from "../components/footer";

import Navbar from "../components/navbar";
import Bestcar from "./bestcar";

import FAQ from "./faq";
import Heroku from "./heroku";
import Kotakbiru from "./kotakbiru";
import Testimonial from "./testimonial";

function Homepage() {
  return (
    <>
      <Navbar />
      <Heroku />

      <Bestcar />
      <Testimonial />
      <Kotakbiru />
      <FAQ />
      <Footer />
    </>
  );
}

export default Homepage;
