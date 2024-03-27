import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useUserData } from "../context/Context";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollBg, setScrollBg] = useState(false);
  const userData = useUserData();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setScrollBg(true);
      } else {
        setScrollBg(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      id="home"
      className="hero min-h-screen bg-cover"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-photo/programming-background-concept_23-2150170124.jpg?t=st=1711448680~exp=1711452280~hmac=8f7fcbec148a0c86f8cd4b79225795b8d9c7e90fc12e23ba7a4dd897f21ee721&w=1380)",
      }}
    >
      <div className="hero-overlay bg-opacity-60">
        <div>
          <style>
            {`
          .scroll-hidden::-webkit-scrollbar {
            height: 0px;
            background: transparent;
          }
        `}
          </style>

          <div className="fixed top-0 w-full z-50">
            <nav
              className={`relative shadow dark:bg-gray-800  animate__animated animate__fadeInRight animate__slower	3 ${
                scrollBg ? "bg-black bg-opacity-80 text-white" : ""
              }`}
            >
              <div className="container px-6 py-3 mx-auto text-orange-500">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <div className="flex items-center justify-between ">
                    <p className="md:hidden block text-2xl">Portfolio</p>
                    <div
                      className={`hidden md:block ${scrollBg ? "hide" : ""}`}
                    >
                      {!scrollBg && (
                        <div className="flex gap-10">
                          <div className="flex items-center gap-2">
                            <Link className="border border-black rounded-md p-2 hover:animate-pulse shadow-md shadow-black">
                              {userData?.user?.about?.name}
                            </Link>
                            <Link className="border border-black rounded-md p-2 hover:animate-pulse shadow-md shadow-black">
                              {userData?.user?.about?.phoneNumber}
                            </Link>
                            <Link className="border border-black rounded-md p-2 hover:animate-pulse shadow-md shadow-black">
                              {userData?.user?.about?.address}
                            </Link>
                          </div>
                          <div className="flex flex-col md:flex-row md:mx-1 gap-5">
                            {userData?.user?.social_handles.map(
                              (icon, index) => (
                                <div
                                  className="p-1 hover:bg-black rounded-full border-orange-500 shadow-lg shadow-black"
                                  key={index}
                                >
                                  <img
                                    title={icon?.platform}
                                    className="w-8"
                                    src={icon?.image?.url}
                                    alt=""
                                  />
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex md:hidden">
                      <button
                        onClick={() => setIsOpen(!isOpen)}
                        type="button"
                        className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                        aria-label="toggle menu"
                      >
                        {!isOpen ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-7 h-7 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4 8h16M4 16h16"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-7 h-7 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Mobile Menu open: "block", Menu closed: "hidden" */}
                  <div
                    className={`${
                      isOpen
                        ? "translate-x-0 opacity-100"
                        : "opacity-0 -translate-x-full"
                    } absolute inset-x-0 z-20 w-full px-6 py-2 transition-all duration-300 ease-in-out bg-white top-24 dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center`}
                  >
                    {/* Search input on mobile screen */}
                    <div className="my-4 md:hidden">
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                          <svg
                            className="w-5 h-5 text-gray-400"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </span>
                        <input
                          type="text"
                          className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                          placeholder="Search"
                        />
                      </div>
                      <Link>hi</Link>
                    </div>
                  </div>
                </div>

                <div className=" py-3 mt-3 -mx-3 overflow-y-auto whitespace-nowrap scroll-hidden hidden md:block animate__animated animate__fadeInLeft animate__slower	3s text-white font-semibold">
                  <ul className=" grid md:grid-cols-9 lg:grid-cols-12 lg:ml-60 items-center md:gap-5  lg:gap-0 mt-5  ">
                    <li>
                      <HashLink
                        className="hover:text-orange-500"
                        smooth
                        to="#home"
                      >
                        Home
                      </HashLink>
                    </li>
                    <li>
                      <HashLink
                        className="hover:text-orange-500"
                        smooth
                        to="#About"
                      >
                        About
                      </HashLink>
                    </li>
                    <li>
                      <HashLink
                        className="hover:text-orange-500"
                        smooth
                        to="#Services"
                      >
                        Services
                      </HashLink>
                    </li>
                    <li>
                      <HashLink
                        className="hover:text-orange-500"
                        smooth
                        to="#portfolio"
                      >
                        Projects
                      </HashLink>
                    </li>
                    <li>
                      <HashLink
                        className="hover:text-orange-500"
                        smooth
                        to="#team"
                      >
                        Skills
                      </HashLink>
                    </li>
                    <li>
                      <HashLink
                        className="hover:text-orange-500"
                        smooth
                        to="#testimonial"
                      >
                        Testimonial
                      </HashLink>
                    </li>
                    <li>
                      <HashLink
                        className="hover:text-orange-500"
                        smooth
                        to="#Blog"
                      >
                        Timeline
                      </HashLink>
                    </li>

                    <li>
                      <HashLink
                        className="hover:text-orange-500"
                        smooth
                        to="#Contact"
                      >
                        Contact
                      </HashLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className="hero-content text-left text-neutral-content">
        <div className="lg:w-full max-w-md ">
          <p className="mb-5 text-2xl text-orange-500 animate__animated animate__fadeInLeft animate__slower	3s">
            {userData?.user?.about?.title} <br />
          </p>
          <p className="mb-5 text-2xl text-orange-500 animate__animated animate__fadeInLeft animate__slower	3s">
            {userData?.user?.about?.exp_year} Years of Experience
          </p>

          <h1 className="mb-5 text-5xl font-bold">
            {" "}
            {userData?.user?.about?.quote}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Nav;
