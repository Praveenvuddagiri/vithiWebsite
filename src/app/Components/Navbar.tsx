'use client';
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl mx-auto p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="http://www.vithiitsolutions.com/images/logo.png"
              alt="Vithi Logo"
              className="h-12"
            />
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 dark:text-white hover:text-blue-500 focus:outline-none focus:text-blue-500"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12"></path>
                ) : (
                  <path d="M4 6h16M4 12h16m-7 6h7"></path>
                )}
              </svg>
            </button>
          </div>
          <div className={`${  isOpen ? "block" : "hidden"} mt-4 md:flex md:items-center md:space-x-8 hidden`}>
            <ul className="md:flex space-x-8 text-lg font-semibold text-gray-600 items-center">
              <li>Home</li>
              <li>About Us</li>
              <li>Services</li>
              <li>Careers</li>
              <li>Contact</li>
              <button className="bg-blue-500 rounded-full px-4 py-2 text-white hover:bg-blue-600 items-start">
                Schedule A Call
              </button>
            </ul>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4 p-4">
          <ul className="flex flex-col space-y-4 text-lg font-semibold text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Careers</li>
            <li>Contact</li>
            <li>Schedule A Call</li>
          </ul>

        </div>
      )}
    </nav>
  );
};

export default Navbar;


