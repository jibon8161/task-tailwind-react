import React from "react";
import { useUserData } from "../context/Context";
import { Link } from "react-router-dom";

const About = () => {
  const userData = useUserData();

  return (
    <div>
      <div className="divider"></div>
      <div id="About" className="container mx-auto mt-8 mb-8">
        <div className="md:flex justify-around items-center">
          <img
            className="w-96 rounded-lg mx-auto md:mx-0 mb-4 md:mb-0 p-2"
            src={userData?.user?.about?.avatar?.url}
            alt=""
          />
          <div className="text-center">
            <p className="uppercase font-serif underline text-center">
              About Me
            </p>

            <h1 className="mt-7 text-3xl font-bold">
              {userData?.user?.about?.subTitle}
            </h1>
            <p className="text-sm text-gray-600 mt-7">
              {userData?.user?.about?.description}
            </p>
            <Link
              to=""
              className="antialiased mt-6 block w-full select-none rounded-lg bg-orange-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-black transition-all hover:shadow-lg hover:shadow-black focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-light="true"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
