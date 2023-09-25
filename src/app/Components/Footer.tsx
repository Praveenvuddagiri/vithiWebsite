import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { TiSocialLinkedinCircular } from 'react-icons/ti';

const dataList = [
    {
        head: 'Application Development',
        titles: [
            { text: 'ERP Solutions', link: '/erp' },
            { text: 'Full Stack Web Development', link: '/full-stack' },
            { text: 'CRM', link: '/crm' },
            { text: 'Mobile Development', link: '/mobile' },
        ],
    },
    {
        head: 'Data Analytics',
        titles: [
            { text: 'Cloud/DevOps', link: '/cloud-devops' },
            { text: 'Big Data & Data Management', link: '/big-data' },
            { text: 'Data Engineering & BI', link: '/data-engineering' },
            { text: 'Data Science (AI/ML)', link: '/data-science' },
        ],
    },
    {
        head: 'Integration & Automation',
        titles: [
            { text: 'Integrations', link: '/integrations' },
            { text: 'Test Automation', link: '/test-automation' },
            { text: 'Serverless Computing', link: '/serverless' },
            { text: 'IoT', link: '/iot' },
        ],
    },
    {
        head: 'Digital Innovation',
        titles: [
            { text: 'eCommerce Platforms', link: '/ecommerce' },
            { text: 'Virtual Reality', link: '/virtual-reality' },
            { text: 'Robotics', link: '/robotics' },
            { text: 'Blockchain', link: '/blockchain' },
        ],
    },
];

const FooterSection = ({ sectionData }:any) => {
    return (
        <div className="mb-4 ml-8">
            <h2 className="text-[#31a2df] text-[20px] font-semibold">
                {sectionData.head}
            </h2>
            <ul className="list-none list-inside mt-10">
                {sectionData.titles.map((item:any, titleIndex:number) => (
                    <li key={titleIndex} className="text-gray-700 my-2 font-normal">
                        <a href={item.link} className="hover:text-blue-600">
                            {item.text}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const Footer = () => {
    return (
        <div className='max-w-7xl'>

            <div className="grid grid-cols-1 md:grid-cols-5 ml-4">
                <div>
                    <img
                        className="w-60 h-10 mb-4 md:mb-4"
                        src="https://www.vithiitsolutions.com/images/logo.png"
                        alt="Vithi IT Solutions Logo"
                    />

                    <h6>
                        Vithi IT Solutions is a <strong>Strategic Technology Partner</strong> helping companies achieve operational excellence by providing the best solutions in the form of End-to-End software solutions after analyzing the user’s needs and problems <br />

                    </h6>
                    <a href="#">Read More</a>
                    <div className="mt-4 md:mt-0">
                        <h2 className="text-[#31a2df] text-sm font-semibold">Get Social With Us</h2>
                        <ul className="social-links flex items-center  mt-2 text-center mb-4">
                            <li>
                                <a href="https://www.facebook.com">
                                    <BsFacebook size={30} className='hover:text-blue-500' />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/company/vithi-it-solutions">
                                    <TiSocialLinkedinCircular size={43} className='hover:text-blue-500' />
                                </a>
                            </li>
                        </ul>

                    </div>
                </div>
                {/* Map over the dataList and render each section */}
                {dataList.map((section, index) => (
                    <FooterSection key={index} sectionData={section} />
                ))}
            </div>

            <div className='bg-[#007bff] mt-4 ml-8 rounded-tr-[40px] rounded-tl-[40px] text-white'> <>COPYRIGHT © 2023, VITHI IT SOLUTIONS. ALL RIGHTS RESERVED.</></div>
        </div>
    )
};

export default Footer;


