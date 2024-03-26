import React from "react";
import { useUserData } from "../context/Context";

const About = () => {
  const userData = useUserData();

  return (
    <div id="About" className="mt-8 mb-8">
      <div className="container mx-auto md:flex justify-between items-center">
        <img
          className="lg:w-1/3 md:w-1/8 rounded-md"
          src={userData?.user?.about?.avatar?.url}
          alt=""
        />
        <div>
          <p>hi</p>
        </div>
      </div>
    </div>
  );
};

export default About;
