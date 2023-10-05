import Link from 'next/link'
import React from 'react'
import { BiHomeAlt } from 'react-icons/bi';

const TopBreadCrum = ({ title, image, navigations }: { title: string, image: string, navigations: string[] }) => {
    return (
        
        <div className='flex flex-col-reverse md:flex-row justify-center items-start bg-[#f5faff] mt-24'>
            <div className='flex flex-col items-start flex-1 p-12'>

                <div className='text-xl flex justify-start items-center mb-10'>
                    <Link href='/'>
                        <BiHomeAlt className='' />
                    </Link> 
                    
                    
                    {navigations?.map((navigation, index) => (
                        <span key={index}>
                                <span className='mx-4'>&gt;</span>
                                <span className='text-base  text-primary hover:text-blue-700'>{navigation}</span>
                        </span>
                    ))    
                    }
                </div>
                    <h1 className='text-lg md:text-4xl font-bold'>{title}</h1>
            </div>
            <div className=''>
                <img src={image} alt="top image" className='max-w-full' />
            </div>
        </div>
    )
}

export default TopBreadCrum