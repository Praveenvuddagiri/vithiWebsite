import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

const CombinedComponent = ({
  header,
  para,
  links,
  image1,
  image2,
  right,
}: {
  header: string;
  para: string;
  links: any[];
  image1: string;
  image2: string;
  right: boolean;
}) => {
  return (
    <div className="flex justify-center gap-4">
      <div
        className={`flex ${
          right
            ? "flex-col xl:flex-row mt-6"
            : "flex-col-reverse xl:flex-row-reverse mb-6"
        } items-center my-10 md:my-16 xl:my-20 w-full md:w-10/12 lg:w-10/12 xl:w-10/12 justify-center xl:gap-10 md:gap-7 gap-10`}
      >
        <div
          className={`relative sm:justify-center flex ${
            !right ? "justify-start" : "justify-end"
          }`}
        >
          <img
            src={image1}
            alt="Image 1"
            className="w-full md:w-auto lg:w-4/5 xl:w-4/5 h-auto object-cover animate-jump-in animate-duration-1500ms animate-delay-300 animate-ease-in animate-normal"
          />

          <img
            src={image2}
            alt="Image 2"
            className={`absolute top-10 w-full md:w-auto lg:w-4/5 xl:w-4/5 h-auto z-10 ${
              right ? "right-0" : "left-0"
            }`}
          />
        </div>
        <div className="w-80 md:w-10/12 xl:w-10/12 flex-grow"> {/* Adjusted width properties */}
          <h2 className="text-2xl md:text-3xl font-semibold text-primary leading-8 md:leading-10 mb-4">
            {header}
          </h2>
          <div className="text-lg text-light mb-6 text-justify">
            <p>{para}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4">
            {links?.map((item: any, index: number) => (
              <a
                href={item.link}
                key={index}
                className="text-secondary text-sm flex items-center font-semibold hover:text-primary"
              >
                {item?.title}
                <BsArrowUpRight size={15} className="ml-2" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CombinedComponent;




