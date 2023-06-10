import React from "react";
import { projectData } from "../portfolioData";

export default function Projects() {
  return (
    <div className="pt-20 mb-20">
      <h2 className="xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 text-center">
        Projects
      </h2>
      <div className="bg-gray-300 text-center flex-col justify-centered rounded-md shadow-xl px-4 py-4 mx-auto mt-20 xs:w-5/6">
        <div className="bg-white rounded-md shadow px-6 py-14 mx-auto">
          <div className="grid lg:grid-cols-1 xl:grid-cols-2 gap-20">
            {projectData.map((project) => (
              <Project key={project.name} project={project} />
            ))}
          </div>
        </div>
        <h2 className="xs:text-xs sm:text-md md:text-lg lg:text-2xl font-semibold text-gray-800 ml-4 mt-4 text-center">
          And many more...
        </h2>
        <a target="_blank" href="https://github.com/kschmelter13">
          <button className="github-button py-3 px-8 rounded-full mt-4">
            See my Github
          </button>
        </a>
      </div>
    </div>
  );
}

function Project({ project }) {
  return (
    <div class="max-w-xl mx-auto">
      <div class="flex flex-col justify-center items-center">
        <a
          class="relative shadow-lg rounded-md hover:filter transition"
          href={project.link}
          target="_blank"
          rel="noreferrer"
        >
          <img
            class="shadow-xl rounded-md object-cover w-full h-full"
            src={project.image}
            alt="Project 1"
          />
          <div class=" px-10 py-10 shadow-lg rounded-md absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 transition duration-200 opacity-0 hover:opacity-100">
            <h3 class="text-white opacity-100 font-semibold xs:text-lg 2xl:text-xl text-center">
              {project.description}
            </h3>
          </div>
        </a>
        <h2 class="xs:text-2xl lg:text-3xl xl:text-2xl 2xl:text-3xl font-semibold text-gray-800 text-center mt-4">
          {project.name}
        </h2>
      </div>
    </div>
  );
}
