import React from 'react';



const CareerAboutBox = ({title, content, contact}:{title:string, content:string, contact: string}) => {
  return (
    <div className='flex justify-center'>
    <div className='p-8 w-[85%]'>
      <div className='text-[48px] leading-[36px] text-[#000000] text-center font-bold mb-[30px] capitalize mt-0'>
        <h1>{title}</h1>
      </div>
      <div className='text-[#697c86] text-[16px] leading-[32px] text-center font-[400] mb-0 p-2'>
        
          <p >{content}</p>
          <p >{contact}</p>
      </div>
    </div>
    </div>
  );
};

export default CareerAboutBox;