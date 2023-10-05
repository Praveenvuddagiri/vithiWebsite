import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';

const CombinedComponent = ({ header, para, link, image1, image2, right }: any) => {
    return (
        <div className={`flex ${right?"flex-col md:flex-row": "flex-col-reverse md:flex-row-reverse"} items-center mb-20`}>
            <div className={`relative sm:justify-center flex ${!right ? 'justify-end' : ''}`}>
                <img
                    src={image1}
                    alt="Image 1"
                    className="w-[70%] h-auto"
                />

                <img
                    src={image2}
                    alt="Image 2"
                    className={`absolute top-10 w-[70%] h-auto z-10 ${right ? 'right-0' : 'left-0'}}`}
                />
            </div>
            <div className="h-fit font-serif flex flex-col p-4  sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 text-center">
                <h2 className="text-[30px] font-[700] text-primary leading-[42px] mb-4">{header}</h2>
                <div className='text-xl text-light mb-6 text-justify'>
                    <p>{para}</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 gap-y-4">
                    {link?.map((item: string, index: number) => (
                        <a href="#" key={index} className="text-secondary text-lg flex items-center font-semibold hover:text-green-700">
                            {item}
                            <BsArrowUpRight size={15} className="ml-2" />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CombinedComponent;