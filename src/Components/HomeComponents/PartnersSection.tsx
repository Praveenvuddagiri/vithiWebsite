"use client"


import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const PartnersSection = ({ partners }: { partners: string[] }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const slideLeft = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      setCurrentSlide(partners.length - 1);
    }
  };

  const slideRight = () => {
    if (currentSlide < partners.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(0);
    }
  };

  useEffect(() => {
    const slideInterval = setInterval(slideRight, 3000);

    return () => {
      clearInterval(slideInterval);
    };
  }, [currentSlide]);

  return (
    <div className="bg-white py-10 flex justify-center mb-10 mt-10">
      <div className="container mx-auto w-[90%] md:w-[60%]">
        <h2 className="text-center text-3xl font-bold mb-8 text-white ">Our Partners</h2>
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              width: `${partners.length * 100}%`,
              transform: `translateX(-${currentSlide * (100 / (partners.length))}%)`,
            }}
          >
            {
              partners.map((partner, index) => {
                return (
                  <div
                    key={index}
                    className={`w-full md:w-1/4 lg:w-1/6 p-4 flex `}
                    style={{ flex: `0 0 ${(100 / partners.length).toFixed(2)}%` }}
                  >

                    <img
                      src={partner}
                      alt={`Partner ${index + 1}`}
                      className="mx-auto max-w-[180px] h-auto border-double border-2 border-light rounded-full "
                      style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" }}
                    />


                  </div>
                )
              }
              )}
          </div>
          <button
            onClick={slideLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-gray-500 hover:text-gray-700 p-2 rounded-full"
          >
            <FaArrowLeft size={24} />
          </button>
          <button
            onClick={slideRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-gray-500 hover:text-gray-700 p-2 rounded-full"
          >
            <FaArrowRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;
