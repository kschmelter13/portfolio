import React from 'react';
import me from '../assets/me.png'


export default function About() {
  return (
    <div className='bg-gray-300 rounded-md shadow-2xl px-4 py-4 mx-auto mt-20 sm:w-3/4'>
        <div className="bg-white rounded-md shadow px-6 py-6 mx-auto">
            <div class="flex flex-wrap justify-center">
                <div class="w-full md:w-1/2 lg:w-1/3 flex-1 p-4 order-1">
                    <h2 class="xs:text-2xl xl:text-3xl font-bold mb-10 text-gray-800">About Me</h2>
                    <p class="about-text mb-4 xs:text-lg xl:text-xl text-gray-700">Hey! My name is Kevin Schmelter and I am currently an online computer science student at Southern New Hampshire University looking to learn, understand, and create software that serves a real purpose to better the future.</p>
                    <p class="about-text mb-4 xs:text-lg xl:text-xl text-gray-700">I am currently looking for a position to elevate my skill level and challenge myself with real world problem solving.</p>
                </div>
                <div class="lg:w-1/3 order-2">
                    <img src={me} alt="Profile Picture" class="object-cover w-full h-full"></img>
                </div>
            </div>
        </div>
    </div>
  );
}
