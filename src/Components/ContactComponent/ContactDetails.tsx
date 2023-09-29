import React from 'react';
import {ContactDet} from '@/utilities/constant'


const ContactDetails = () => {
  return (
    <div className='border-solid border-2 border-[#6f42c1] m-7 bg-white md:p-8'>
      <div className='px-6 pt-6'>
        <h1 className='text-[21px] leading-[32px] font-[300] mb-[40px] text-[#0f467a] md:font-[300] md:text-[30px]'>{ContactDet?.content}</h1>
      </div>
      <div className='m-16 flex justify-between gap-5 sm:flex-col md:flex-row '>
        <div className='mb-3'> 
          <h2 className='text-[16px] leading-[21px] uppercase text-[#1e85bd] tracking-[1] font-[700] mb-1'>CALL US</h2>
          <p className='text-[#444444] font-sans font-[600] text-[16px] md:font-[600] md:text-[20px]'>{ContactDet.phonenumber}</p>
        </div>
        <div className='mb-3 md:w-[40%]'>
          <h1 className='text-[16px] leading-[21px] uppercase text-[#1e85bd] tracking-[1] font-[700]'>ADDRESS</h1>
          <h2 className='text-[#000] font-sans font-[600] text-[16px] mb-[2px] md:font-[600] md:text-[20px]'>Corporate Office:</h2>
          <p className='text-[#000] font-sans font-[600] text-[16px] mb-[1rem] md:font-[600] md:text-[20px]'>{ContactDet.address.addressOffice}</p>
          <h2 className='text-[#000] font-sans font-[600] text-[16px] mb-[2px] md:font-[600] md:text-[20px]'>Working Location:</h2>
          <p className='text-[#000] font-sans font-[600] text-[16px] mb-[2px] md:font-[600] md:text-[20px]'>{ContactDet.address.addressWorkingLocation}</p>
        </div>
        <div>
          <h2 className='text-[16px] leading-[21px] uppercase text-[#1e85bd] tracking-[1] font-[700] mb-1'>MAIL US</h2>
          <p className='text-[#000] font-sans font-[600] text-[16px] mb-[1rem] md:font-[600] md:text-[20px]'>{ContactDet.address.mailus}</p>
        </div>
      </div>
    </div>
  )
}

export default ContactDetails
