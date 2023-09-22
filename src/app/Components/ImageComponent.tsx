import React from 'react';

const ImageComponent = ({ image1, image2 }: { image1: string; image2: string }) => {
  return (
    <div className="relative">
      {/* First image */}
     
      <img
        src={image1}
        alt="Image 1"
        className="w-7/12 h-auto left-2"
      />
      {/* Second image */}
      <img
        src={image2}
        alt="Image 2"
        className="absolute top-10 left-0 w-6/12 h- z-10"
      />
    </div>
  );
};

export default ImageComponent;



