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
          "url(https://images.pexels.com/photos/5926397/pexels-photo-5926397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
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

                 
                  <div
                    className={`${
                      isOpen
                        ? "translate-x-0 opacity-100"
                        : "opacity-0 -translate-x-full"
                    } absolute inset-x-0 z-20 w-full px-6 py-2 transition-all duration-300 ease-in-out bg-white top-24 dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center`}
                  >
                   
                    <div className="my-4 md:hidden">
                      <div className="relative">
                        <ul
                          className="font-semibold text-black"
                          style={{
                            listStyle: "disc",
                            paddingLeft: "20px",
                            marginTop: "5px",
                            marginBottom: "5px",
                          }}
                        >
                          <li className="mb-2">
                            <HashLink smooth to="#home">
                              <span className="hover:text-orange-500 hover:font-bold">
                                Home
                              </span>
                            </HashLink>
                          </li>
                          <li className="mb-2">
                            <HashLink smooth to="#About">
                              <span className="hover:text-orange-500 hover:font-bold">
                                About
                              </span>
                            </HashLink>
                          </li>
                          <li className="mb-2">
                            <HashLink smooth to="#Services">
                              <span className="hover:text-orange-500 hover:font-bold">
                                Services
                              </span>
                            </HashLink>
                          </li>
                          <li className="mb-2">
                            <HashLink smooth to="#portfolio">
                              <span className="hover:text-orange-500 hover:font-bold">
                                Projects
                              </span>
                            </HashLink>
                          </li>
                          <li className="mb-2">
                            <HashLink smooth to="#team">
                              <span className="hover:text-orange-500 hover:font-bold">
                                Skills
                              </span>
                            </HashLink>
                          </li>
                          <li className="mb-2">
                            <HashLink smooth to="#testimonial">
                              <span className="hover:text-orange-500 hover:font-bold">
                                Testimonial
                              </span>
                            </HashLink>
                          </li>
                          <li className="mb-2">
                            <HashLink smooth to="#Blog">
                              <span className="hover:text-orange-500 hover:font-bold">
                                Professional Journey
                              </span>
                            </HashLink>
                          </li>
                          <li className="mb-2">
                            <HashLink smooth to="#Contact">
                              <span className="hover:text-orange-500 hover:font-bold">
                                Contact
                              </span>
                            </HashLink>
                          </li>
                        </ul>
                      </div>
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
