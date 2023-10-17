import React from "react";

const Blog = ({ image, heading, para,date }: any) => {
  return (
    <div className="mt-10 mx-4 md:mt-28 md:mx-24 bg-white shadow-md rounded-lg overflow-hidden">
      <div className="mx-auto">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img className="w-fit object-cover" src={image} alt="" />
          <div className="p-4 md:p-6">
            <div className="text-primary text-2xl md:text-3xl lg:text-4xl mb-2 md:mb-4">{heading}</div>
            <div className="mb-4 text-secondary text-sm"><p>Created Date:{date}</p></div>
            <div className="text-primary text-sm md:text-lg">{para}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

