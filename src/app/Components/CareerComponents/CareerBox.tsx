import React from 'react';
import { careersdata } from '@/constant';
import CareersBoxBenefit from './CareersBoxBenefit';

const CareerBox = () => {
  return (
    <div className='bg-gradient-to-r from-[#3F51B5] to-[#269cca] '>
      <div className=''>
        <h2>A Career With Real Benefits</h2>
      </div>
      <div>
        {
          careersdata?.map((e)=>{
            return (
              <div>
                <CareersBoxBenefit image={e.image} title={e.title} content={e.content}/>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default CareerBox
