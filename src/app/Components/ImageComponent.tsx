import React from 'react';

const ImageComponent = ({ image1, image2 }: { image1: string; image2: string }) => {
  return (
    <div className="relative left-14">
      {/* First image */}
      <img
        src={image1}
        alt="Image 1"
        className="w-11/12 h-auto md:left-2"
      />
      {/* Second image */}
      <img
        src={image2}
        alt="Image 2"
        className="w-10/12 h-auto absolute top-10 left-0 z-10"
      />
    </div>
  );
};

export default ImageComponent;




