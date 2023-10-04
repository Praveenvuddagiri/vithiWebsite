import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

const CareerContactForm = ({ title, description, image }: { title: string, description: string, image: string }) => {

  return (
    <div className="relative w-full h-full mt-10">
      <img
        src={image}
        alt="imageCareer"
        className="w-full h-full inset-0 object-cover"
      />

      <div className="md:absolute md:h-full top-0 right-0 w-full xl:w-3/5 bg-[#003b63] opacity-95 text-white font-bold text-left px-4 sm:px-8 md:px-24 lg:px-32">
        <h2 className="text-[#fff] text-3xl mb-5 mt-8 capitalize font-[700] leading-10">
          {title}
        </h2>
        <p className="text-base sm:text-lg md:text-xl leading-6 sm:leading-8 text-[#fff] opacity-[0.5] font-light pb-4">
          {description}
        </p>
        <div className="w-full">
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-white font-extralight">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="bg-transparent w-full sm:w-80 md:w-96 border-b-2 mb-5 text-[#fff] font-[400] text-[16px] leading-[2px] shadow-none focus:border-b-2"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="bg-transparent w-full sm:w-80 md:w-96 border-b-2 border-opacity-60 mb-5 text-[#fff] font-[400] text-[16px] leading-[2px] shadow-none"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="number" className="block text-white">
                Phone Number
              </label>
              <input
                type="tel"
                id="number"
                name="number"
                className="bg-transparent w-full sm:w-80 md:w-96 border-b-2 border-opacity-60 mb-5 text-[#fff] font-[400] text-[16px] leading-[2px] shadow-none"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="qualification" className="block text-white">
                Qualification
              </label>
              <input
                type="text"
                id="qualification"
                name="qualification"
                className="bg-transparent w-full sm:w-80 md:w-96 border-b-2 border-opacity-60 mb-5 text-[#fff] font-[400] text-[16px] leading-[2px] shadow-none"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="upload" className="block text-white">
                Resume (PDF)
              </label>
              <input
                type="file"
                id="upload"
                name="upload"
                accept=".pdf"
                className="border rounded-md px-2 py-1"
              />
            </div>
            <div className="flex">
              <button
                type="submit"
                className="bg-transparent text-white font-bold text-lg px-4 rounded hover:text-xl"
              >
                Submit Resume
              </button>
              < BsArrowRight size={40} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CareerContactForm;
