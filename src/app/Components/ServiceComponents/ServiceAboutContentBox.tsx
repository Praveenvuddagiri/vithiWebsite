import React from 'react'

const ServiceAboutContentBox = ({title, heading, para}: {title: any, heading: any, para: any}) => {
    return (
        <div className='flex flex-col items-start justify-center gap-8 md:px-46 p-28 bg-[#062e53]'>
            <h1 className='text-[#1e85bd] font-bold text-xl'>
                {title}
            </h1>
            <p className='text-2xl font-bold text-white'>
                {heading}
            </p>
            <p className='text-lg text-white'>
                {para}
            </p>
        </div>
    )
}

export default ServiceAboutContentBox;