import React from 'react'

const AboutContentBox = ({ title, heading, content }: { title: string, heading: string, content: string }) => {
    return (
        <div className='w-full'>
            <div className='flex flex-col items-start justify-center gap-8 md:px-6 p-4 md:p-8 lg:p-16 xl:p-28'>
                <h1 className='text-primary font-bold text-sm md:text-3xl'>
                    {title}
                </h1>
                <p className='text-2xl font-bold'>
                    {heading}
                </p>
                <p className='text-lg md:text-xl lg:text-2xl text-gray-800'>
                    {content}
                </p>
            </div>
        </div>
    )
}

export default AboutContentBox
