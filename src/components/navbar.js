import React from "react";
import { Link as MainLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

function Navbar() {
  return (
    <nav className="bg-gray-800 fixed top-0 w-full z-10">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <MainLink to="/" className="text-white font-bold text-lg">
              Kevin Schmelter
            </MainLink>
          </div>
          <div className="hidden sm:block">
            <div className="ml-6 flex">
              <ScrollLink
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                activeClassName="bg-gray-900 text-white"
                to="about"
                spy={true}
                smooth={true}
                offset={-210}
                duration={500}
              >
                <button>About</button>
              </ScrollLink>
              <ScrollLink
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                activeClassName="bg-gray-900 text-white"
                to="projects"
                spy={true}
                offset={-50}
                smooth={true}
                duration={500}
              >
                <button>Projects</button>
              </ScrollLink>
              <ScrollLink
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                activeClassName="bg-gray-900 text-white"
                to="skills"
                spy={true}
                smooth={true}
                duration={500}
              >
                <button>Skills</button>
              </ScrollLink>
              <ScrollLink
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                activeClassName="bg-gray-900 text-white"
                to="contact"
                spy={true}
                offset={-35}
                smooth={true}
                duration={500}
              >
                <button>Contact</button>
              </ScrollLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
