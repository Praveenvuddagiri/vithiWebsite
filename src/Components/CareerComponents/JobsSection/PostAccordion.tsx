"use client"
import React, { useState } from 'react';
import { AiOutlineRight } from 'react-icons/ai'

import JobPostData from './JobPostData';

const PostAccordion = ({postData, postNumber, setCurrentAccordion, isOpen, setIsOpen, active=false} : any) => {
    return (
        <div className=" p-4">
            <div
                className="bg-white rounded-lg p-4 cursor-pointer border-[1px] border-[#b7b7b7] shadow-[0px_0px_30px_0px_#00000012]"
                onClick={() => {
                    
                    setCurrentAccordion(postNumber-1);
                    if(active === isOpen)
                        setIsOpen(!isOpen)
                    else    
                        setIsOpen(true)
                }}
            >
                <div className="flex justify-between items-center sm:pl-[30px] md:pl-[40px] xl:pl-[50px] pr-[30px] py-[30px]  ">
                    <div className='w-[90%] '>
                        <div className='flex justify-center'>
                            <div className='flex flex-row justify-between md:text-[14px] text-[10px] w-[90%] '>
                                <h6>{(postNumber<10) ? ("0"+postNumber) : postNumber}</h6>
                                <h6>LOCATION</h6>
                            </div>
                        </div>

                        <div className='flex flex-row justify-between md:text-[36px] text-[16px] capitalize'>
                            <h1 className="">{postData.position}</h1>
                            <h1>{postData.location}</h1>
                        </div>
                    </div>


                    <span className={`transform ${active && isOpen ? 'rotate-90' : 'rotate-0'} transition-transform`}>
                        <AiOutlineRight className='md:text-4xl text-xl' />
                    </span>
                </div>

                {active && isOpen && (
                    <JobPostData postData={postData}/>
                )}
            </div>
        </div>
    );
}

export default PostAccordion;