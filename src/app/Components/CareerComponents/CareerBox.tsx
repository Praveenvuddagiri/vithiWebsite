import React from 'react';
import { careersdata } from '@/constant';
import CareersBoxBenefit from './CareersBoxBenefit';

const CareerBox = () => {
  return (
    <div className='bg-gradient-to-r from-[#3F51B5] to-[#269cca] p-4 md:p-14 relative'>
      <img
        src="https://www.vithiitsolutions.com/images/9fda3ccbc09fd6b1db76410e59c325d0.png"
        alt="background image"
        className='w-full h-full absolute inset-0 object-cover opacity-10'
      />
      <div className=''>
        <h2 className='text-[24px] md:text-[36px] leading-[36px] text-center mb-[15px] md:mb-[30px] text-white capitalize font-[700]'>
          A Career With Real Benefits
        </h2>
      </div>
      <div className='grid gap-7 sm:grid-cols-12'>
        {careersdata?.map((e, index) => {
          return (
            <div className='col-span-4 md:col-span-4' key={index}>
              <CareersBoxBenefit image={e.image} title={e.title} content={e.content} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CareerBox;
