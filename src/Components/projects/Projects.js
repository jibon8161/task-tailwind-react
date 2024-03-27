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
    ? userData?.user?.projects?.filter((project) =>
        project.techStack.some((tech) => tech.trim() === filter)
      )
    : userData?.user?.projects;

  // Reverse the order of filtered projects only
  const reversedProjects = filteredProjects
    ? filteredProjects.slice().reverse()
    : [];

  // Total number of projects after filtering
  const totalProjects = filteredProjects ? filteredProjects.length : 0;

  return (
    <div>
      <div id="portfolio" className="divider"></div>
      <div className="container mx-auto">
        <h1 className="text-3xl underline font-serif mb-4 mt-8">PORTFOLIO</h1>
        <h1 className="text-4xl">
          <span className="text-info">{userData?.user?.about?.some_total}</span>
          projects completed! 🚀 Excited to share a glimpse of a few of them!
        </h1>
        {/* Filter buttons */}
        <p className="text-left mt-12 mb-4 text-2xl font-bold">
          Showing Result: {totalProjects}
        </p>
        <div className="my-4 flex flex-wrap ">
          <button
            className="antialiased mt-6 block select-none rounded-lg bg-orange-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-black shadow-md shadow-black transition-all hover:shadow-lg hover:shadow-black focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none m-2"
            onClick={() => handleFilter(null)}
          >
            All
          </button>
          <button
            className="antialiased mt-6 block select-none rounded-lg bg-orange-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-black shadow-md shadow-black transition-all hover:shadow-lg hover:shadow-black focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none m-2"
            onClick={() => handleFilter("Reactjs")}
          >
            Reactjs
          </button>
          <button
            className="antialiased mt-6 block select-none rounded-lg bg-orange-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-black shadow-md shadow-black transition-all hover:shadow-lg hover:shadow-black focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none m-2"
            onClick={() => handleFilter("Nextjs")}
          >
            Nextjs
          </button>
          <button
            className="antialiased mt-6 block select-none rounded-lg bg-orange-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-black shadow-md shadow-black transition-all hover:shadow-lg hover:shadow-black focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none m-2"
            onClick={() => handleFilter("Mern")}
          >
            Mern
          </button>
          <button
            className="antialiased mt-6 block select-none rounded-lg bg-orange-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-black shadow-md shadow-black transition-all hover:shadow-lg hover:shadow-black focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none m-2"
            onClick={() => handleFilter("CSS")}
          >
            CSS
          </button>
          <button
            className="antialiased mt-6 block select-none rounded-lg bg-orange-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-black shadow-md shadow-black transition-all hover:shadow-lg hover:shadow-black focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none m-2"
            onClick={() => handleFilter("TailwindCSS")}
          >
            TailwindCSS
          </button>
          {/* Add more buttons for other tech stacks */}
        </div>
        {/* Render filtered projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
          {reversedProjects?.map((project, index) => (
            <div
              key={project._id}
              className="card bg-base-100 shadow-xl image-full md:hover:animate-pulse"
            >
              <figure>
                <img
                  src={project.image.url}
                  alt={project.title}
                  className="w-full"
                />
              </figure>
              <div className="card-body hover:shadow-2xl hover:shadow-orange-500 ">
                <h2 className="card-title ">{project.title}</h2>
                <p></p>
                {/* Use unique IDs for each modal dialog */}
                <dialog id={`my_modal_${index}`} className="modal">
                  <div className="modal-box w-11/12 max-w-5xl">
                    <div className="card w-full bg-base-100 shadow-xl image-full">
                      <figure>
                        <img src={project.image.url} alt="Shoes" />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title md:text-5xl text-orange-500">
                          {project.title}
                        </h2>
                      </div>
                    </div>
                    <div className="modal-action">
                      <div class="mx-auto text-orange-500">
                        <p>
                          <span className="mr-2"> Technologies Used:</span>
                          {project?.techStack.map((tech, index) => (
                            <span className="text-black" key={index}>
                              {tech}
                              {index !== project?.techStack?.length - 1 && ", "}
                            </span>
                          ))}
                        </p>
                        <p>
                          Github URL :{" "}
                          <span className="text-black">
                            {" "}
                            {project.githuburl}
                          </span>
                        </p>
                        <p>
                          Live URL :{" "}
                          <span className="text-black">{project.liveurl}</span>
                        </p>
                      </div>
                    </div>
                    <form method="dialog">
                      <button className="antialiased mt-6 block w-full select-none rounded-lg bg-orange-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-black shadow-md shadow-black transition-all hover:shadow-lg hover:shadow-black focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                        Close
                      </button>
                    </form>
                  </div>
                </dialog>
                <div className="card-actions justify-end">
                  <button
                    className="antialiased mt-6 block select-none rounded-lg bg-orange-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-black shadow-md shadow-black transition-all hover:shadow-lg hover:shadow-black focus:opacity-[0.85]  active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none m-2"
                    onClick={() =>
                      document.getElementById(`my_modal_${index}`).showModal()
                    }
                  >
                    Details
                  </button>
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
