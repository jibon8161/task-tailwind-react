import React from "react";
import About from "../about/About";
import Services from "../services/Services";
import Projects from "../projects/Projects";

const Home = () => {
  return (
    <div className="">
      {/* about section start */}
      <About></About>
      <Services></Services>
      <Projects></Projects>
    </div>
  );
};

export default Home;
