import React, { useState } from "react";
import { useUserData } from "../context/Context";

const Testimonial = () => {
  const userData = useUserData();
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? userData.user.testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setIndex((prevIndex) =>
      prevIndex === userData.user.testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  console.log(userData?.user);
  return (
    <div>
      <div id="testimonial" className="divider"></div>
      <div className="container mx-auto">
        <div className="container mx-auto">
          <section className="bg-white dark:bg-gray-900">
            <div className="max-w-6xl px-6 py-10 mx-auto">
              <p className="uppercase text-3xl font-serif underline text-center">
                Testimonials
              </p>

              <h1 className="mt-2 text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
                What clients are saying
              </h1>

              <main className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
                <div className="absolute w-full bg-orange-400 -z-10 md:h-96 rounded-2xl "></div>

                <div className="w-full p-6 bg-orange-400 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
                  <img
                    className="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl"
                    src={userData?.user?.testimonials[index]?.image.url}
                    alt="client"
                  />

                  <div className="mt-2 md:mx-6 ">
                    <div>
                      <p className="text-xl font-medium tracking-tight text-white font-serif">
                        {userData?.user?.testimonials[index]?.name}
                      </p>
                      <p className="text-white ">
                        {userData?.user?.testimonials[index]?.position}
                      </p>
                    </div>

                    <p className="mt-4 text-lg leading-relaxed  md:text-xl">
                      {userData?.user?.testimonials[index]?.review}
                    </p>

                    <div className="flex items-center justify-between mt-6 md:justify-start">
                      <button
                        title="left arrow"
                        className="p-2 text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 hover:bg-blue-400"
                        onClick={handlePrev}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 19l-7-7 7-7"
                          />
                        </svg>
                      </button>

                      <button
                        title="right arrow"
                        className="p-2 text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 md:mx-6 hover:bg-blue-400"
                        onClick={handleNext}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
