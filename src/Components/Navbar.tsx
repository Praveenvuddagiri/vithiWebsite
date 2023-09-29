'use client';
import Link from "next/link";
import React, { useState } from "react";

const Navbar =({ active}: { active:string}) => {


  const [isOpen, setIsOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [activeItem,setActiveItem]=useState(active);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleServicesDropdown = () => {
    setServicesDropdownOpen(true);
  };

  const closeServicesDropdown = () => {
    setServicesDropdownOpen(false);
  };

  return (
    <nav className="bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700 fixed top-0 left-0 right-0 shadow-lg transition-all duration-300 transform translate-y-0 z-50">
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
          <div className={`${isOpen ? "block" : "hidden"} mt-4 md:flex md:items-center md:space-x-8 hidden`}>
            <ul className="md:flex space-x-8 text-lg  text-[#595a5b] font-[500] text-[15px] capitalize items-center cursor-pointer">
              <Link href="/">
                <li onClick={()=>setActiveItem('home')} className={`${activeItem === "home" ? "text-blue-500 border-b-2 border-b-blue-400" : "text-black"} hover:border-b-2 hover:border-b-blue-400`}>Home</li>
              </Link>
              <Link href="/aboutus">
                <li onClick={()=>setActiveItem("aboutus")} className={`${activeItem === "aboutus" ? "text-blue-500 border-b-2 border-b-blue-400" : "text-black"} hover:border-b-2 hover:border-b-blue-400`}>About Us</li>
              </Link>
              <li
                className={`relative ${activeItem === "services" ? "text-blue-500 border-b-2 border-b-blue-400" : "text-black"} hover:border-b-2 hover:border-b-blue-400`}
                onMouseEnter={toggleServicesDropdown}
                onMouseLeave={closeServicesDropdown}
                onClick={()=>setActiveItem("services")} 
              >
                <button
                  className={`text-gray-600 dark:text-white hover:text-blue-500 focus:outline-none focus:text-blue-500 ${servicesDropdownOpen ? "text-blue-500" : ""}`}
                >
                  Services
                </button>
                {servicesDropdownOpen && (
                  <ul className="absolute bg-white border border-gray-300 rounded-lg shadow-lg w-72 p-2 text-[#000] leading-[22px] font-[400]"
                    onMouseEnter={toggleServicesDropdown}
                    onMouseLeave={closeServicesDropdown}>
                    <Link href='/services/application-development'>
                      <li className="px-3 py-2 hover:bg-gray-100">
                      <a href="#">Application Development</a>
                      </li><hr />
                    </Link>
                    
                    <Link href='/services/data-services'>
                      <li className="px-3 py-2 hover:bg-gray-100">
                        <a href="#">Data Services</a>
                      </li><hr />
                    </Link>
                    <Link href='/services/data-services'>
                      <li className="px-3 py-2 hover:bg-gray-100">
                        <a href="#">Integration & Automation</a>
                      </li><hr />
                    </Link>
                    <Link href='/services/digital-innovation'>
                      <li className="px-3 py-2 hover:bg-gray-100">
                        <a href="#">Digital Innovation</a>
                      </li>
                    </Link>
                    {/* Add more services as needed */}
                  </ul>
                )}
              </li>
              <Link href='/careers'>
                <li onClick={()=>setActiveItem("careers")} className={`${activeItem === "careers" ? "text-blue-500 border-b-2 border-b-blue-400" : "text-black"} hover:border-b-2 hover:border-b-blue-400`}>Careers</li>
              </Link>
              <Link href='/contact'>
                <li onClick={()=>setActiveItem("contact")} className={`${activeItem === "contact" ? "text-blue-500 border-b-2 border-b-blue-400" : "text-black"} hover:border-b-2 hover:border-b-blue-400`}>Contact</li>
              </Link>
              <button className="bg-[#1e85bd] rounded-full px-4 py-2 text-white hover:bg-[#28a745] items-start">
                Schedule A Call
              </button>
            </ul>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-3 p-4">
          <ul className="flex flex-col space-y-4 text-lg   text-blue-500">
            <li>Home</li><hr />
            <li>About Us</li><hr />
            <li
                className="relative"
                onMouseEnter={toggleServicesDropdown}
                onMouseLeave={closeServicesDropdown}
              >
                <button
                  className={` dark:text-white hover:text-blue-500 focus:outline-none focus:text-blue-500 ${servicesDropdownOpen ? "text-blue-500" : ""}`}
                >
                  Services
                </button>
                {servicesDropdownOpen && (
                  <ul className="absolute bg-white border border-gray-300 rounded-lg shadow-lg w-64 text-gray-600 p-2"
                    onMouseEnter={toggleServicesDropdown}
                    onMouseLeave={closeServicesDropdown}>
                    <Link href='/services/application-development'>
                      <li className="px-3 py-2 hover:bg-gray-100">
                      <a href="#">Application Development</a>
                      </li>
                    </Link>
                    <Link href='/services/data-services'>
                      <li className="px-3 py-2 hover:bg-gray-100">
                        <a href="#">Data Services</a>
                      </li>
                    </Link>
                    <Link href='/services/data-services'>
                      <li className="px-3 py-2 hover:bg-gray-100">
                        <a href="#">Integration & Automation</a>
                      </li>
                    </Link>
                    <Link href='/services/digital-innovation'>
                      <li className="px-3 py-2 hover:bg-gray-100">
                        <a href="#">Digital-Innovation</a>
                      </li>
                    </Link>
                    {/* Add more services as needed */}
                  </ul>
                )}
              </li><hr />
              <Link href="/"></Link>
            <li>Careers</li><hr />
            <li>Contact</li><hr />
            <li>Schedule A Call</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
