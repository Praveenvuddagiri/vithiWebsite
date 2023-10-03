import React from 'react';

const CareerContactForm = ({ title, description,imgSrc }:{title:string, description:string,imgSrc:string}) => {

  return (
    <div className="relative w-[100%] h-full">
      <img
        src={imgSrc}
        alt="imageCarrer"
        className="w-full h-full inset-0 object-cover"
      />

      <div className="absolute top-0 right-0 xl:w-3/5 xl:h-[100%] h-fit bg-[#003b63] opacity-95 text-white font-bold text-left px-24">
        <h2 className="text-[#fff] text-3xl mb-5 mt-8 capitalize font-[700] leading-10">
          {title}
        </h2>
        <p className="text-base sm:text-lg md:text-xl leading-6 sm:leading-8 text-[#fff] opacity-[0.5] font-light mx-auto pb-4">
          {description}
        </p>
        <div className="">
          <form>
            <div className="text-left">
              <label htmlFor="name" className="block text-white font-extralight">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="bg-transparent h-[60px] sm:w-80 md:w-96 border-b-2 mb-5 text-[#fff] font-[400] text-[16px] leading-[2px] shadow-none focus:border-b-2"
              />
            </div>

            <div className="mb-4 text-left">
              <label htmlFor="email" className="block text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="bg-transparent h-[60px] sm:w-80 md:w-96 border-b-2 border-opacity-60 mb-5 text-[#fff] font-[400] text-[16px] leading-[2px] shadow-none"
              />
            </div>

            <div className="mb-4 text-left">
              <label htmlFor="number" className="block text-white">
                Phone Number
              </label>
              <input
                type="tel"
                id="number"
                name="number"
                className="bg-transparent h-[60px] sm:w-80 md:w-96 border-b-2 border-opacity-60 mb-5 text-[#fff] font-[400] text-[16px] leading-[2px] shadow-none"
              />
            </div>

            <div className="mb-4 text-left">
              <label htmlFor="qualification" className="block text-white">
                Qualification
              </label>
              <input
                type="text"
                id="qualification"
                name="qualification"
                className="bg-transparent h-[60px] sm:w-80 md:w-96 border-b-2 border-opacity-60 mb-5 text-[#fff] font-[400] text-[16px] leading-[2px] shadow-none"
              />
            </div>

            <div className="mb-4 text-left">
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
            <button
              type="submit"
              className="bg-transparent text-white font-bold py-2 px-4 rounded hover:text-lg"
            >
              Submit Resume
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CareerContactForm;



