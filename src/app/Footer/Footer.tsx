import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { TiSocialLinkedinCircular } from 'react-icons/ti';
import { footerData } from '@/constant';
import FooterDataSection from './FooterDataSection';



const Footer = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-10">
            <div className="max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-5">
                    <div className='m-2'>
                        <img
                            className="w-60 h-auto mb-4 md:mb-4"
                            src="https://www.vithiitsolutions.com/images/logo.png"
                            alt="Vithi IT Solutions Logo"
                        />

                        <h6>
                            Vithi IT Solutions is a <strong>Strategic Technology Partner</strong> helping companies achieve operational excellence by providing the best solutions in the form of End-to-End software solutions after analyzing the user’s needs and problems <br />
                        </h6>
                        <a href="#" className='border-b-2 border-b-gray-600 text-gray-700'>Read More</a>
                        <div className="mt-4 md:mt-2">
                            <h2 className="text-[#31a2df] text-sm font-semibold mt-1">Get Social With Us</h2>
                            <ul className="social-links flex items-center mt-2 text-center mb-4">
                                <li>
                                    <a href="https://www.facebook.com">
                                        <BsFacebook size={30} className='hover:text-blue-500 text-blue-700' />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/company/vithi-it-solutions">
                                        <TiSocialLinkedinCircular size={43} className='hover:text-blue-500 text-blue-700' />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {footerData?.map((section: any, index: number) => (
                        <FooterDataSection key={index} sectionData={section} />
                    ))}
                </div>
            </div>

            <div className='text-center bg-[#007bff] text-white rounded-tr-[40px] rounded-tl-[40px] pl-5 w-3/4 p-2 text-xs md:text-lg'>
                <>COPYRIGHT © 2023, VITHI IT SOLUTIONS. ALL RIGHTS RESERVED.</>
            </div>
        </div>
    );
};

export default Footer;
