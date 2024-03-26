import React, { useState } from "react";
import { useUserData } from "../context/Context";

const Projects = () => {
  const userData = useUserData();
  const [filter, setFilter] = useState(null);

  // Define a function to handle filtering
  const handleFilter = (techStack) => {
    setFilter(techStack);
  };

  // Filtered projects based on the current filter value
  const filteredProjects = filter
    ? userData?.user?.projects
        ?.filter((project) =>
          project.techStack.some((tech) => tech.trim() === filter)
        )
        .reverse() // Reverse the order of filtered projects
    : userData?.user?.projects;

  // Total number of projects after filtering
  const totalProjects = filteredProjects ? filteredProjects.length : 0;

  return (
    <div>
      <div className="divider"></div>
      <div className="container mx-auto">
        <h1 className="text-3xl underline font-serif mb-4 mt-8">PORTFOLIO</h1>
        <h1 className="text-4xl">
          <span className="text-info">
            {" "}
            {userData?.user?.about?.some_total}
          </span>{" "}
          projects completed! 🚀 Excited to share a glimpse of a few of them!
        </h1>
        {/* Filter buttons */}
        <p className="text-left mt-12 mb-4 text-2xl font-bold">
          Showing Result: {totalProjects}
        </p>
        <div className="my-4 flex flex-wrap">
          <button
            className="btn btn-primary m-2"
            onClick={() => handleFilter(null)}
          >
            All
          </button>
          <button
            className="btn btn-primary m-2"
            onClick={() => handleFilter("Reactjs")}
          >
            Reactjs
          </button>
          <button
            className="btn btn-primary m-2"
            onClick={() => handleFilter("Nextjs")}
          >
            Nextjs
          </button>
          <button
            className="btn btn-primary m-2"
            onClick={() => handleFilter("Mern")}
          >
            Mern
          </button>
          <button
            className="btn btn-primary m-2"
            onClick={() => handleFilter("CSS")}
          >
            CSS
          </button>
          <button
            className="btn btn-primary m-2"
            onClick={() => handleFilter("TailwindCSS")}
          >
            TailwindCSS
          </button>
          {/* Add more buttons for other tech stacks */}
        </div>
        {/* Render filtered projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
          {filteredProjects?.map((project) => (
            <div
              key={project._id}
              className="card bg-base-100 shadow-xl image-full"
            >
              <figure>
                <img
                  src={project.image.url}
                  alt={project.title}
                  className="w-full"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{project.title}</h2>
                <p></p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
