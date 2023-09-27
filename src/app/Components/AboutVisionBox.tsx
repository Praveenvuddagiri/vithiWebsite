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
    <div className='relative'>
      <div className="flex gap-10">
        <img
          src="https://www.vithiitsolutions.com/images/25290e5e13bb2803eaccb15365bbca98.jpg"
          alt="Vision Image"
          className="absolute"
        />
        <div className="">
          <div className="text-blue-500 font-semibold text-lg mb-5">Our Vision</div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
            At Vithi IT Solutions, we’re driven by the purpose of "Building your Business"
          </h1>
          <ul className="list-outside list-none pl-6">
            {visionPoints.map((vision, index) => (
              <li key={index} className="mb-4 flex">
                <BiSolidRightArrow className='mr-3 w-5 h-10 font-bold text-blue-500' />

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
