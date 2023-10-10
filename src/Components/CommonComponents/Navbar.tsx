"use client";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = ({
  active,
  logo,
  navItems,
  callButton
}: {
  active: string;
  logo: string;
  navItems: any[];
  callButton:any;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(active);

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
      <div className="max-w-screen-2xl mx-6 p-4">
        <div className="flex items-end justify-between">
          <div className="flex md:ml-5">
            <img src={logo} alt="Vithi Logo" className="w-full h-12" />
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 dark:text-white hover:text-primary focus:outline-none focus:text-primary"
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
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } mt-4 md:flex md:items-center md:space-x-8 hidden`}
          >
            <ul className="md:flex space-x-8 text-lg text-[#595a5b] font-[500] text-[15px] capitalize items-end cursor-pointer">
              {navItems.map((item: any) =>
                item?.serviceTypes ? (
                  <li
                    className={`relative ${
                      activeItem === "services"
                        ? "text-secondary border-b-2 border-b-secondary"
                        : "text-black"
                    } hover:border-b-2 hover:border-b-secondary`}
                    onMouseEnter={toggleServicesDropdown}
                    onMouseLeave={closeServicesDropdown}
                    onClick={() => setActiveItem("services")}
                  >
                    <button
                      className={`text-gray-600 dark:text-white hover:text-primary focus:outline-none focus:text-primary ${
                        servicesDropdownOpen ? "text-primary" : ""
                      }`}
                    >
                      Services
                    </button>
                    {servicesDropdownOpen && (
                      <ul
                        className="absolute bg-white border border-gray-300 rounded-lg shadow-lg w-72 p-2 text-secondary leading-[22px] font-[400]"
                        onMouseEnter={toggleServicesDropdown}
                        onMouseLeave={closeServicesDropdown}
                      >
                        {item.serviceTypes.map((ser: any) => (
                          <Link href={ser.link}>
                            <li className="px-3 py-2 hover:bg-light hover:text-white text-primary">
                              <a href="#">{ser.name}</a>
                            </li>
                            <hr />
                          </Link>
                        ))}
                      </ul>
                    )}
                  </li>
                ) : (
                  <Link href={item.link}>
                    <li
                      onClick={() => setActiveItem(item.activeName)}
                      className={`${
                        activeItem === item.activeName
                          ? "text-secondary border-b-2 border-b-secondary"
                          : "text-black"
                      } hover:border-b-2 hover:border-b-secondary`}
                    >
                      {item.name}
                    </li>
                  </Link>
                )
              )}

              <button className="bg-secondary rounded-full px-6 py-2 text-white items-start hover:text-secondary hover:bg-transparent hover:border-solid hover:border-2 hover:border-secondary">
                {callButton.title}
              </button>
            </ul>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-3 p-4">
          <ul className="flex flex-col space-y-4 text-lg   text-primary">
            {navItems.map((item: any) =>
              item?.serviceTypes ? (
                <>
                  <li
                    className="relative"
                    onMouseEnter={toggleServicesDropdown}
                    onMouseLeave={closeServicesDropdown}
                  >
                    <button
                      className={` dark:text-white hover:text-primary focus:outline-none focus:text-primary ${
                        servicesDropdownOpen ? "text-primary" : ""
                      }`}
                    >
                      Services
                    </button>
                    {servicesDropdownOpen && (
                      <ul
                        className="absolute bg-white border border-gray-300 rounded-lg shadow-lg w-64 text-gray-600 p-2"
                        onMouseEnter={toggleServicesDropdown}
                        onMouseLeave={closeServicesDropdown}
                      >
                        {item.serviceTypes.map((ser: any) => (
                          <Link href={ser.link}>
                            <li className="px-3 py-2 hover:bg-gray-100 w-60">
                              <a>{ser.name}</a>
                            </li>
                          </Link>
                        ))}
                      </ul>
                    )}
                  </li>
                  <hr />
                </>
              ) : (
                <Link href={item.link}>
                  <li >{item.name}</li>
                  <hr />
                </Link>
              )
            )}

            
            <li>{callButton.title}</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
