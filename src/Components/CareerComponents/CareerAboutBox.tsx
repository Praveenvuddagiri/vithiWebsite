import React from 'react';



const CareerAboutBox = ({title, content, contact}:{title:string, content:string, contact: string}) => {
  return (
    <div className='flex justify-center md:p-20 bg-primary'>
    <div className=''>
      <div className='md:text-[40px] leading-[36px] text-secondary text-center font-bold mb-[30px] capitalize mt-0 text-[40px] sm:leading-9'>
        <h1>{title}</h1>
      </div>
      <div className='text-white lg:text-[16px] leading-[32px] md:leading-7 font-[400] p-4 text-justify'>
        
          <p >{content}</p>
          <p >{contact}</p>
      </div>
    </div>
    </div>
  );
};

export default CareerAboutBox;