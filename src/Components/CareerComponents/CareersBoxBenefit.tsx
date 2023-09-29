import React from 'react';

const CareersBoxBenefit = ({ image, title, content }: { image: string; title: string; content: string }) => {
  return (
    <div className='mt-2'>
      <div className='overflow-hidden'>
        <img src={image} alt={title} className='h-[310px] w-[100%] object-cover transition-transform transform hover:scale-110' />
      </div>
      <div className='mt-7'>
        <h2 className='text-[#98f3ff] font-[600] leading-[32px] mb-[10px] text-[21px]'>{title}</h2>
        <p className='text-[14px] leading-[24px] text-[#fff] font-[600]'>{content}</p>
      </div>
    </div>
  );
};

export default CareersBoxBenefit;
