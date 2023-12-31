import React from "react";
import { BsArrowRight } from "react-icons/bs";

const CareerContactForm = ({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) => {
  return (
    <div className="relative w-full h-full mt-20">
      <img
        src={image}
        alt="imageCareer"
        className="w-full h-full inset-0 object-cover"
      />

      <div className="xl:absolute xl:h-full top-0 right-0 w-full xl:w-3/5 bg-[#84b85dcc] opacity-95 text-white font-bold text-left px-4 sm:p-8 md:px-24 md:py-14 xl:px-32 mt-6 md:m-0">
        <h1 className="text-[#fff] text-3xl md:text-4xl mb-5 mt-8 lg:mt-8 capitalize font-[700] leading-10 p-4">
          {title}
        </h1>
        <p className="text-base sm:text-lg md:text-xl leading-6 sm:leading-8 text-[#fff] font-light pb-4">
          {description}
        </p>
        <div className="w-full mt-12 h-fit p-4">
          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-white font-extralight mb-4 transform translate-y-0 transition-transform"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="bg-transparent md:w-full w-full border-b-2 mb-5 text-[#fff] font-[400] text-[16px] leading-[2px] focus:border-b-2 focus:p-4 focus:outline-none focus:ring-0 focus:translate-y-[-1.5rem] transition-transform"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-white font-extralight mb-4"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="bg-transparent md:w-full w-full border-b-2 mb-5 text-[#fff] font-[400] text-[16px] leading-[2px] focus:border-b-2 focus:p-4 focus:outline-none focus:ring-0 focus:translate-y-[-1.5rem] transition-transform"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="number"
                className="block text-white font-extralight mb-4"
              >
                Phone Number
              </label>
              <input
                type="number"
                id="number"
                name="number"
                className="bg-transparent md:w-full w-full border-b-2 mb-5 text-[#fff] font-[400] text-[16px] leading-[2px] focus:border-b-2 focus:p-4 focus:outline-none focus:ring-0 focus:translate-y-[-1.5rem] transition-transform"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="qualification"
                className="block text-white font-extralight mb-4"
              >
                Qualification
              </label>
              <input
                type="text"
                id="qualification"
                name="qualification"
                className="bg-transparent md:w-full w-full border-b-2 mb-5 text-[#fff] font-[400] text-[16px] leading-[2px] focus:border-b-2 focus:p-4 focus:outline-none focus:ring-0 focus:translate-y-[-1.5rem] transition-transform"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="upload"
                className="block text-white font-extralight mb-4"
              >
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
              <button className="bg-transparent text-white font-bold text-xl lg:text-2xl px-4 rounded hover:text-2xl hover:text-primary">
                Submit Resume
              </button>
              <BsArrowRight className="text-primary" size={30} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CareerContactForm;
