import React from 'react'

export default function project({project}) {
  return (
    <div class="mx-auto">
        <div class="flex flex-col justify-center items-center">
            <a class='relative shadow-lg rounded-md hover:filter hover:brightness-90 transition' href={project.link} target="_blank" rel="noreferrer">
            <img
                class="shadow-lg rounded-md object-cover w-full h-full"
                src={project.image}
                alt="Project 1"
            />
            <div class="shadow-lg rounded-md absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 transition duration-200 opacity-0 hover:opacity-100">
                <h3 class="text-white opacity-100 font-bold text-3xl text-center">
                    {project.description}
                </h3>
            </div>
            </a>
            <h2 class='text-center mt-4'>{project.name}</h2>
        </div>
    </div>
  )
}
