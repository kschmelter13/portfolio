import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-white font-bold text-lg">
              Kevin Schmelter
            </Link>
          </div>
          <div className="hidden sm:block">
            <div className="ml-6 flex">
              <NavLink
                to="/"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                activeClassName="bg-gray-900 text-white"
              >
                About
              </NavLink>
              <NavLink
                to="/projects"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                activeClassName="bg-gray-900 text-white"
              >
                Projects
              </NavLink>
              <NavLink
                to="/skills"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                activeClassName="bg-gray-900 text-white"
              >
                Skills
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
