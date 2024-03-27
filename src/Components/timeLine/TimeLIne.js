import React, { useState } from "react";
import { useUserData } from "../context/Context";

const TimeLine = () => {
  const userData = useUserData();
  const [showEducation, setShowEducation] = useState(true);

  const toggleSections = () => {
    setShowEducation(!showEducation);
  };

  // Function to format date
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div>
      <div id="Blog" className="divider"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl underline font-serif mb-6 mt-8">
          Professional Journey
        </h1>
        <h1 className="text-4xl mb-8 font-semibold ">
          Highlights of Career Milestones
        </h1>

     
        <button
          onClick={toggleSections}
          className="antialiased mt-6 block w-full select-none rounded-lg bg-orange-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-black shadow-md shadow-black transition-all hover:shadow-lg hover:shadow-black focus:opacity-[0.85]  active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mb-5"
        >
          {showEducation ? "Show Experience" : "Show Education"}
        </button>

       
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 ">
          {userData?.user?.timeline?.map((item, index) => {
            if (
              (showEducation && item.forEducation) ||
              (!showEducation && !item.forEducation)
            ) {
              return (
                <div
                  key={index}
                  className="max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md shadow-black dark:bg-gray-800 text-left hover:shadow-2xl hover:shadow-orange-500 hover:animate-pulse "
                >
                  <div className="flex flex-col sm:flex-row items-center justify-between">
                    <p className="mb-3 sm:mb-0 font-semibold">
                      <span className="text-orange-500"> Job Title:</span>{" "}
                      {item?.jobTitle}
                    </p>
                    <p className="text-sm font-light text-gray-600 dark:text-gray-400 mb-2 sm:mb-0">
                      {formatDate(item?.startDate)} -{formatDate(item?.endDate)}
                    </p>
                  </div>
                  <div className="mt-2">
                    <p
                      className="text-xl font-bold text-orange-500 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline"
                      tabIndex="0"
                      role="link"
                    >
                      Company Name: {item?.company_name}
                      <div className="divider"></div>
                    </p>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                      <span className="text-orange-500 font-semibold">
                        {" "}
                        Job Location:{" "}
                      </span>
                      {item?.jobLocation}
                    </p>
                    <div className="divider"></div>
                    <p className="text-orange-500 font-semibold">
                      Job Responsibilities:
                    </p>

                    <ol>
                      {item.bulletPoints.map((point, index) => (
                        <li key={index} style={{ marginBottom: "10px" }}>
                          <span className="text-orange-500 font-semibold">
                            {index + 1}
                          </span>
                          . {point}
                        </li>
                      ))}
                    </ol>
                  </div>
                  <div className="divider"></div>
                  <div className="flex items-center justify-between mt-4">
                    <p>
                      {" "}
                      <span className="text-orange-500 font-semibold">
                        Summary :
                      </span>{" "}
                      {item?.summary}
                    </p>

                    <div className="flex items-center">
                      <img
                        className="hidden object-cover w-12 h-12 mx-4 rounded-full sm:block"
                        src={userData?.user?.about?.avatar?.url}
                        alt="avatar"
                      />
                      <p
                        className="font-bold text-gray-700 cursor-pointer dark:text-gray-200"
                        tabIndex="0"
                        role="link"
                      ></p>
                    </div>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
