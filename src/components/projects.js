import React from 'react';
import Project from './project';
import projectData from '../projectData';

export default function Projects() {
  return (
    <div className='pt-20'>
      <h2 className="xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 text-center">Projects</h2>
      <div className="bg-gray-300 rounded-md shadow-2xl px-4 py-4 mx-auto mt-20 xs:w-5/6">
        <div className="bg-white rounded-md shadow px-6 py-6 mx-auto">
          <div className="grid md:grid-cols-1 lg:grid-cols-2 3xl:grid-cols-3 gap-12">
            {projectData.map(project => (
              <Project
                key={project.name}
                project={project}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}