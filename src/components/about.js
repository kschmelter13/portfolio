import React from 'react';
import me from '../assets/me.png'


export default function About() {
  return (
    <div className='bg-gray-300 rounded-md shadow-2xl px-4 py-4 mx-auto xs:mt-10 3xl:mt-20 xs:w-3/4 mb-20'>
        <div className="bg-white flex rounded-md shadow px-6 py-6 mx-auto">
            <div class="flex flex-wrap justify-center">
                <div class="w-full md:w-1/2 lg:w-1/3 flex-1 p-4 order-1">
                    <h2 class="xs:text-2xl xl:text-3xl font-bold mb-10 text-gray-800">About Me</h2>
                    <p class="about-text mb-4 xs:text-sm sm:text-lg xl:text-xl text-gray-700">Hey there! My name is Kevin Schmelter and I'm a Full Stack Developer and Computer Science student, currently pursuing my degree online at Southern New Hampshire University.</p>
                    <p class="about-text mb-4 xs:text-sm sm:text-lg xl:text-xl text-gray-700">My passion lies in using technology to solve real-world problems and create software that serves a meaningful purpose.</p>
                    <p class="about-text mb-4 xs:text-sm sm:text-lg xl:text-xl text-gray-700">I'm currently seeking opportunities to work on challenging projects and learn from experienced professionals in the field. Feel free to take a look at my projects and if you're interested in working together, please don't hesitate to get in touch!</p>
                </div>
                <div class="2xl:w-1/3 order-2 flex justify-center items-center">
                    <img src={me} alt="Profile Picture" class="object-cover w-2/5 2xl:w-full 2xl:w-full flex-shrink "></img>
                </div>
            </div>
        </div>
    </div>
  );
}
