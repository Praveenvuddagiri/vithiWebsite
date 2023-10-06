import Link from 'next/link';
import React from 'react';

const CarouselItem = ({ title1, title2, description, imageUrl, discussButton }: { title1: string; title2: string; description: string; imageUrl: string, discussButton: any }) => {
  return (
    <div className=" mt-2 mb-16 ">
      <div className="flex relative flex-col-reverse md:flex-row justify-between h-screen items-center ">
        <div className='absolute z-0 md:-bottom-14 -bottom-28'>
          <video src="http://www.vithiitsolutions.com/images/particles.mp4" autoPlay loop muted
            className='opacity-25 w-[52rem]'></video>
        </div>
        <div className="px-4 md:px-4 lg:px-8 xl:px-16 2xl:px-24 z-10 max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl w-[90%] md:w-full">
          <div className="flex flex-col justify-center p-4 items-center md:items-start">
            <h2 className="text-3xl md:text-5xl font-extrabold leading-10 text-primary">{title1}<br />{title2}</h2>
            <p className="mt-5 text-lg text-light leading-7 text-justify">{description}</p>
          </div>
          <Link href={discussButton.link}>
            <button className="bg-secondary rounded-full px-6 py-2 text-white hover:text-secondary hover:bg-transparent hover:border-solid hover:border-2 hover:border-secondary items-start">
              {discussButton.title}
            </button>
          </Link>
        </div>
        <div className="z-10 md:pr-16 w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl">
          <img src={imageUrl} alt={title1} className="w-full h-auto object-cover" />
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
