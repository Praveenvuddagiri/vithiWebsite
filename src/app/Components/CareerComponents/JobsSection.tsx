"use client"
import React, { useState } from 'react'
import PostAccordion from './PostAccordion'
import { jobs } from '@/constant'

const JobsSection = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [currentAccordion, setCurrentAccordion] = useState(0);

    const jobPosts = jobs;
    return (
        <div>

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
    )
}

export default JobsSection
