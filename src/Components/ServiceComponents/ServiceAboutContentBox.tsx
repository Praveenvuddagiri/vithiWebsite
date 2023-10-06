import React from 'react'

const ServiceAboutContentBox = ({ title, heading, para }: { title: any, heading: any, para: any }) => {
    return (
        <div className='flex justify-center items-center flex-col bg-primary p-10'>
            <div className='flex flex-col items-start justify-center gap-8 py-28 w-[80%]'>
                <h1 className='text-secondary font-bold text-5xl'>
                    {title}
                </h1>
                <p className='text-2xl font-bold text-white text-justify'>
                    {heading}
                </p>
                <p className='text-xl text-white text-justify'>
                    {para}
                </p>
            </div>
        </div>

    )
}

export default ServiceAboutContentBox;