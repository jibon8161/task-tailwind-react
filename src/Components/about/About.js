import React from "react";
import { useUserData } from "../context/Context";

const About = () => {
  const userData = useUserData();

  return (
    <div id="About" className="container mx-auto mt-8 mb-8">
      <div className="md:flex justify-around items-center">
        <img
          className="w-96 rounded-lg mx-auto md:mx-0 mb-4 md:mb-0 p-2"
          src={userData?.user?.about?.avatar?.url}
          alt=""
        />
        <div className="text-center">
          <p className="uppercase font-serif underline text-center">About Me</p>

          <h1 className="mt-7 text-3xl font-bold">
            {userData?.user?.about?.subTitle}
          </h1>
          <p className="text-sm text-gray-600 mt-7">
            {userData?.user?.about?.description}
          </p>
          <div className="flex">
<p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
