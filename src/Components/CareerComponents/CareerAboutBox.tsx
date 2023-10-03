import React from 'react';



const CareerAboutBox = ({title, content, contact}:{title:string, content:string, contact: string}) => {
  return (
    <div className='p-8'>
      <div className='text-[36px] leading-[36px] text-[#000000] text-center w-[100%] font-bold mb-[30px] capitalize mt-0'>
        <h2>{title}</h2>
      </div>
      <div className='text-[#697c86] text-[14px] leading-[26px] w-[100%] text-center font-[400] mb-0 '>
        
          <p >{content}</p>
          <p >{contact}</p>
      </div>
    </div>
  );
};

export default CareerAboutBox;