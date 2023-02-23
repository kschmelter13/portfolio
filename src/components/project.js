import React from 'react'

export default function project({project}) {
  return (
    <div class="max-w-xl mx-auto">
        <div class="flex flex-col justify-center items-center">
            <a class='relative shadow-lg rounded-md hover:filter hover:brightness-90 transition' href={project.link} target="_blank" rel="noreferrer">
            <img
                class="shadow-lg rounded-md object-cover w-full h-full"
                src={project.image}
                alt="Project 1"
            />
            <div class=" px-10 py-10 shadow-lg rounded-md absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 transition duration-200 opacity-0 hover:opacity-100">
                <h3 class="text-white opacity-100 font-bold xs:text-lg md:text-2xl text-center">
                    {project.description}
                </h3>
            </div>
            </a>
            <h2 class='xs:text-2xl xl:text-3xl font-bold text-gray-800 text-center mt-4'>{project.name}</h2>
        </div>
    </div>
  )
}
