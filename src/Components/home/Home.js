import React from "react";
import About from "../about/About";
import Services from "../services/Services";
import Projects from "../projects/Projects";
import Skills from "../skills/Skills";
import Testimonial from "../testimonials/Testimonial";

const Home = () => {
  return (
    <div className="">
      {/* about section start */}
      <About></About>
      <Services></Services>
      <Projects></Projects>
      <Skills></Skills>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
