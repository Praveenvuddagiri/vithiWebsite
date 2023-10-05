import React from 'react';

const CarouselItem = ({ title1, title2, description, imageUrl }: { title1: string; title2: string; description: string; imageUrl: string }) => {
  return (
    <div className=" mt-2 mb-16">
      <div className="flex relative flex-col-reverse md:flex-row justify-between h-screen items-center ">
        <div className='absolute z-0 md:bottom-0 -bottom-28'>
          <video src="http://www.vithiitsolutions.com/images/particles.mp4" autoPlay 
          className='opacity-25 w-[55rem]'></video>
        </div>
        <div className="px-4 md:px-4 lg:px-8 xl:px-16 2xl:px-24 z-10 w-full max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl">
          <div className="flex flex-col justify-center p-4 items-center">
            <h2 className="text-3xl md:text-5xl font-extrabold leading-10 text-black">{title1}<br />{title2}</h2>
            <p className="mt-5 text-lg text-gray-600 w-3/4 leading-7">{description}</p>
          </div>
        </div>
        <div className="z-10 md:pr-16 w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl">
          <img src={imageUrl} alt={title1} className="w-full h-auto object-cover" />
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
