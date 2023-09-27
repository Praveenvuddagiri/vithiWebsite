import React from 'react';

const visionPoints = [
  "Supporting our customers in getting their breakthrough products to milestones and market faster.",
  "To continuously create new opportunities for growth in your strategic business.",
  "Passionately helping business through innovative technologies to reach the business dreams.",
  "To develop lasting client relationships by providing exceptional stakeholder value in an environment of trust and respect."
];

const AboutVisionBox = () => {
  return (
    <div className="relative px-4 md:px-8 lg:px-16 xl:px-20 2xl:px-32 mt-20 mb-20 flex flex-col md:flex-row justify-end items-center gap-8 bg-[#f6f6fb] rounded-lg overflow-hidden">

        <img
          src="https://www.vithiitsolutions.com/images/25290e5e13bb2803eaccb15365bbca98.jpg"
          alt="Vision Image"
          className="w-1/2 h-full absolute"
        />
      <div className="md:w-1/2">
        <div className="text-blue-500 font-semibold text-lg mb-5">Our Vision</div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          At Vithi IT Solutions, we’re driven by the purpose of "Building your Business"
        </h1>
        <ul className="list-outside list-disc pl-6">
          {visionPoints.map((vision, index) => (
            <li key={index} className="mb-4">
              {vision}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AboutVisionBox;
