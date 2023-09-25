import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import ImageComponent from './ImageComponent';

const imageUrls = {
  image1: 'http://www.vithiitsolutions.com/images/4b12216502d3566707e37c109ec622c8.png', // Replace with the actual URL for image1
  image2: 'http://www.vithiitsolutions.com/images/cd2dd0d095bb3ba0958482abbb3d4baa.png', // Replace with the actual URL for image2
};

const ContainBox = ({ header, para, link }: any) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      {/* ImageComponent */}
      <div className="col-span-1">
        <ImageComponent image1={imageUrls.image1} image2={imageUrls.image2} />
      </div>
      
      {/* Content */}
      <div className="col-span-1 md:col-span-1 h-fit font-serif flex flex-col p-4 gap-y-5 sm:w-full">
        <h2 className="text-2xl font-bold text-blue-500">{header}</h2>
        <div>
          <p>{para}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-2 gap-y-4">
          {link?.map((item: string, index: number) => (
            <a href="#" key={index} className="text-green-400 flex items-center font-semibold hover:text-green-600">
              {item}
              <BsArrowUpRight size={15} className="ml-2" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContainBox;

