import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';

const ContainBox = ({ header, para, link }: any) => {
  return (
    <div className="h-fit font-serif flex flex-col p-4 gap-y-5 sm:w-full md:w-2/3 lg:w-1/2 xl:w-1/3">
      <h2 className="text-2xl font-bold text-blue-500">{header}</h2>
      <div>
        <p>{para}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 gap-y-4">
        {link?.map((item: string, index: number) => (
          <a href="#" key={index} className="text-green-400 flex items-center font-semibold hover:text-green-600">
            {item}
            <BsArrowUpRight size={15} className="ml-2" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContainBox;
