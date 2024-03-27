import React from "react";
import About from "../about/About";
import Services from "../services/Services";
import Projects from "../projects/Projects";
import Skills from "../skills/Skills";
import Testimonial from "../testimonials/Testimonial";
import TimeLIne from "../timeLine/TimeLIne";
import Contact from "../contact/Contact";

const Home = () => {
  return (
    <div className="">
      {/* about section start */}
      <About></About>
      <Services></Services>
      <Projects></Projects>
      <Skills></Skills>
      <Testimonial></Testimonial>
      <TimeLIne></TimeLIne>
      <Contact></Contact>
    </div>
  );
};

export default Home;
