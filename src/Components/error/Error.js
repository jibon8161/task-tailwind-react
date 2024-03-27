import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="container mx-auto">
      <section class="flex items-center h-screen p-16 bg-gray-50 dark:bg-gray-700">
        <div class="container flex flex-col items-center ">
          <div class="flex flex-col gap-6 max-w-md text-center">
            <h2 class="font-extrabold text-9xl text-gray-600 dark:text-gray-100">
              <span class="sr-only">Error</span>404
            </h2>
            <p class="text-2xl md:text-3xl dark:text-gray-300">
              Sorry, we couldn't find this page.
            </p>
            <Link
              to="/"
              className="antialiased mt-6 block w-full select-none rounded-lg bg-orange-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-black shadow-md shadow-black transition-all hover:shadow-lg hover:shadow-black focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              Back to home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Error;
