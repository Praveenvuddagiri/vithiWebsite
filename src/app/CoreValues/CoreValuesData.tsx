import React from 'react';
import CoreValues from './CoreValues';
import { coreValuesData } from '@/constant'

const CoreValuesList = () => {
  return (
    <div className='p-12'>
      <div className='text-center text-3xl font-bold mb-8'>
      <h1>CORE VALUES</h1>
      </div>
    <div className="grid gap-6 md:grid-cols-4">
      {coreValuesData.map((data, index) => (
        <CoreValues
          key={index}
          imgUrl={data.imgUrl}
          title={data.title}
          paraGraph={data.paraGraph}
        />
      ))}
    </div>
    </div>
  );
}

export default CoreValuesList;
