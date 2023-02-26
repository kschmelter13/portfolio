import React, { useEffect, useState } from 'react';
import { resumeData } from '../portfolioData';

export default function Hero() {
  const [showHello, setShowHello] = useState(false);
  const [showName, setShowName] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowHello(true), 500); // adjust the delay as needed
    setTimeout(() => setShowName(true), 1000); // adjust the delay as needed
  }, []);

  const openResume = () => {
    window.open(resumeData.image, '_blank');
  };

  return (
    <div className="hero-section bg-gradient-to-r from-blue-600 to-purple-700">
      <div className="container mx-auto py-16 px-4 text-center">
        <h1 className={'xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 xs:mt-2 sm:mt-4 md:mt-8'}>
          <div className={'greeting'}>
            <span className={`${showHello ? 'opacity-100 fade-in' : 'opacity-0'}`}>Hello! </span>
            <span className={`${showName ? 'opacity-100 fade-in' : 'opacity-0'}`}>My name is,</span>
          </div>
          <div>Kevin Schmelter</div>
        </h1>
        <p className="xs:text-xl md:text-2xl lg:text-3xl text-gray-200 font-bold xs:mt-4 sm:mt-8 md:mt-14 mb-6">
          Full Stack Developer and Computer Science student.
        </p>
        <button className="bg-white text-gray-900 py-3 px-8 rounded-full hover:bg-gray-300 hover:text-gray-900 xs:mt-8 sm:mt-16 md:mt-20 xs:mb-0 md:mb-5 3xl:mb-20 ">
          View Resume
        </button>
      </div>
    </div>
  );
}
