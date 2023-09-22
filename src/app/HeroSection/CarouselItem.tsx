import React from 'react';

const CarouselItem = ({ title1, title2, description, imageUrl }: { title1: string; title2: string; description: string; imageUrl: string }) => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-20 2xl:px-32">
      <div className="flex flex-col md:flex-row justify-evenly h-screen items-center ">
        <div className="w-full max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl">
          <div className="flex flex-col justify-center p-4">
            <h2 className="text-4xl font-extrabold text-black">{title1}<br />{title2}</h2>
            <p className="mt-5 text-lg text-gray-600">{description}</p>
          </div>
        </div>
        <div className="flex-shrink-0 w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl">
          <img src={imageUrl} alt={title1} className="w-full h-auto object-cover" />
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
