import React from "react";
import { useUserData } from "../context/Context";

const Skills = () => {
  const userData = useUserData(); // Fetch userData using custom hook

  // Sort the skills array based on the percentage (ascending order)
  const sortedSkills = userData?.user?.skills.sort(
    (a, b) => a.percentage - b.percentage
  );

  const getColor = (name) => {
    // Derive color dynamically based on skill name
    // You can implement your own logic here
    // This is just a placeholder
    const hash = name
      .split("")
      .reduce((acc, char) => char.charCodeAt(0) + acc, 0);
    const hue = hash % 360;
    return `hsl(${hue}, 70%, 50%)`;
  };

  return (
    <div id="team">
      <div className="divider mt-12"></div>
      <div className="max-w-full mx-auto p-4 mt-8 md:max-w-xl">
        <h1 className="text-3xl underline font-serif mb-6 mt-8">SKILLS</h1>
        <h1 className="text-4xl mb-8 font-semibold ">
          Discover My Expertise and Proficiency
        </h1>

        {sortedSkills.map((skill, index) => (
          <div key={index} className="mb-7">
            <div className="flex justify-between py-1">
              <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">
                {skill.name}
              </span>
              <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">
                {skill.percentage}%
              </span>
            </div>
            <svg
              className="rc-progress-line"
              viewBox="0 0 100 1"
              preserveAspectRatio="none"
            >
              <path
                className="rc-progress-line-trail"
                d="M 0.5,0.5 L 99.5,0.5"
                strokeLinecap="round"
                stroke="#D9D9D9"
                strokeWidth="1"
                fillOpacity="0"
              ></path>
              <path
                className="rc-progress-line-path"
                d="M 0.5,0.5 L 99.5,0.5"
                strokeLinecap="round"
                stroke={getColor(skill.name)}
                strokeWidth="1"
                fillOpacity="0"
                style={{
                  strokeDasharray: "lg:w-full", // Full width for large (lg) devices
                  strokeDashoffset: "0px",
                  transition:
                    "stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s",
                }}
              ></path>
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
