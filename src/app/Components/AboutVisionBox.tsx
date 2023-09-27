import React from 'react';
import { BiSolidRightArrow } from 'react-icons/bi';

const visionPoints = [
  "Supporting our customers in getting their breakthrough products to milestones and market faster.",
  "To continuously create new opportunities for growth in your strategic business.",
  "Passionately helping business through innovative technologies to reach the business dreams.",
  "To develop lasting client relationships by providing exceptional stakeholder value in an environment of trust and respect."
];

const AboutVisionBox = () => {
  return (
    <div className="bg-blue-50 p-8 md:p-12 lg:p-16 xl:p-20 2xl:p-32">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2 flex-shrink-0 relative flex md:justify-end justify-center">
          <img
            src="https://www.vithiitsolutions.com/images/25290e5e13bb2803eaccb15365bbca98.jpg"
            alt="Vision Image"
            className="h-auto w-3/4 object-cover"
          />
        </div>
        <div className="md:w-1/2 p-4 md:p-10 bg-white">
          <div className="text-blue-500 font-semibold text-lg mb-5">Our Vision</div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
            At Vithi IT Solutions, we’re driven by the purpose of "Building your Business"
          </h1>
          <ul className="list-outside list-none pl-6">
            {visionPoints.map((vision, index) => (
              <li key={index} className="mb-4 flex items-start">
                <BiSolidRightArrow className="mr-3 w-5 h-10 font-bold text-blue-500" />
                {vision}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutVisionBox;
