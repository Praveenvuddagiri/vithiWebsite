import React from 'react'

const AboutContentBox = ({ title, heading, content }: { title: string, heading: string, content: string }) => {
    return (
        <div className='w-full'>
            <div className='flex flex-col items-start justify-center gap-8 md:px-46 p-28'>
                <h1 className='text-blue-500 font-bold text-xl'>
                    {title}
                </h1>
                <p className='text-2xl font-bold'>
                    {heading}
                </p>
                <p className='text-lg text-gray-800'>
                    {content}
                </p>
            </div>
        </div>
    )
}

export default AboutContentBox