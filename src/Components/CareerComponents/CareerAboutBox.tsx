import React from 'react';



const CareerAboutBox = ({title, content, contact}:{title:string, content:string, contact: string}) => {
  return (
    <div className='flex justify-center md:p-20 bg-primary'>
    <div className='p-8 w-[85%]'>
      <div className='md:text-[48px] leading-[36px] text-secondary text-center font-bold mb-[30px] capitalize mt-0 text-[40px] sm:leading-6'>
        <h1>{title}</h1>
      </div>
      <div className='text-white lg:text-[16px] leading-[32px] font-[400] p-4'>
        
          <p >{content}</p>
          <p >{contact}</p>
      </div>
    </div>
    </div>
  );
};

export default CareerAboutBox;