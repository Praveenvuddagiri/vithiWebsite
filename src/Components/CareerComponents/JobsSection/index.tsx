"use client"
import React, { useState } from 'react'
import PostAccordion from './PostAccordion'
import { jobs } from '@/utilities/constant'

const JobsSection = ({jobPosts}:{jobPosts:any[]}) => {
    const [isOpen, setIsOpen] = useState(true);
    const [currentAccordion, setCurrentAccordion] = useState(0);

    return (
        <div className="flex flex-col justify-center items-center mt-20">
            <h1 className="text-primary md:text-[36px] font-bold text-[20px]">OPEN POSITIONS</h1>
            <div className="lg:w-[85%] mt-4">

                {
                    jobPosts?.map((job: any, index: number) =>
                        <div key={index}>
                            <PostAccordion
                                postData={job}
                                active={(index === currentAccordion) ? true : false}
                                postNumber={index + 1}
                                setCurrentAccordion={setCurrentAccordion}
                                isOpen={isOpen}
                                setIsOpen={setIsOpen}
                            />
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default JobsSection