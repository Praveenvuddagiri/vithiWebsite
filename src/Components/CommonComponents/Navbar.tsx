"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BiX } from "react-icons/bi";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({
  active,
  logo,
  navItems,
  callButton,
}: {
  active: string;
  logo: string;
  navItems: any[];
  callButton: any;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(active);
  const [animateNavbar, setAnimateNavbar] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimateNavbar(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white ${
        animateNavbar
          ? "transform -translate-y-full transition-transform duration-500 ease-in"
          : "transition-transform duration-300 ease-in-out translate-y-0"
      }`}
    >
      <div className="max-w-screen-5xl mx-6 p-4">
        <div className="flex items-end justify-between">
          <div className="flex-shrink-0 xl:ml-14">
            <img
              src={logo}
              alt="Vithi Logo"
              className="w-16 sm:20 md:w-24 3xl:w-32"
            />
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 dark:text-white hover:text-primary focus:outline-none focus:text-primary"
            >
                {isOpen ? (
                  <FaTimes className="text-primary"/>
                ) : (
                  <FaBars className="text-primary" />
                )}
            </button>
          </div>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } mt-4 md:flex md:items-center md:space-x-12 hidden`}
          >
            <ul className="md:flex 2xl:space-x-8 md:space-x-4 text-lg text-primary font-[500] text-[15px] capitalize items-center cursor-pointer">
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
      
{
  isOpen && (
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
              <li>{item.name}</li>
              <hr />
            </Link>
          )
        )}

        <button className="bg-secondary rounded-full p-2 sm:px-6 sm:py-2 text-white items-start hover:text-secondary hover:bg-transparent hover:border-solid hover:border-2 hover:border-secondary">
          {callButton.title}
        </button>
      </ul>
    </div>
  )
}

    </nav>
  );
};

export default Navbar;
