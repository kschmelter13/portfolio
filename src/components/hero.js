import React, { useEffect, useState } from 'react';

export default function Hero() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div className="hero-section bg-gradient-to-r from-blue-600 to-purple-700">
      <div className="container mx-auto py-16 px-4 text-center">
        <h1 className={'xs:text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 xs:mt-4 sm:mt-8 md:mt-12'}>
          <span className={`hello ease-in-out mr-5 ${
            show ? 'opacity-100 transition-opacity duration-1000' : 'opacity-0'
          }`}>Hello!</span> 
          I'm Kevin Schmelter.
        </h1>
        <p className="xs:text-2xl md:text-3xl text-gray-200 font-bold xs:mt-4 sm:mt-8 md:mt-14 mb-6">
          Full Stack Developer and Computer Science student.
        </p>
        <button className="bg-white text-gray-900 py-3 px-8 rounded-full hover:bg-gray-300 hover:text-gray-900 xs:mt-8 sm:mt-16 md:mt-20 xs:mb-0 lg:mb-0 3xl:mb-20">
          View Resume
        </button>
      </div>
    </div>
  );
}
