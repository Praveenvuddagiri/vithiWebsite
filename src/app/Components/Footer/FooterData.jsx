import React from 'react';

const FooterData = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row items-center justify-between">
                <img className="w-60 h-10 mb-4 md:mb-0" src="https://www.vithiitsolutions.com/images/logo.png" alt="" />
                <div className="md:ml-8">
                    <p className="text-center sm:text-left">
                        <span>
                            Vithi IT Solutions is a <strong>Strategic Technology Partner </strong>
                            helping companies achieve operational excellence by providing the best
                            solutions in the form of End-to-End software solutions after analyzing
                            the user’s needs and problems <br /> 
                            <a className='' href="#">Read More</a>
                        </span>
                    </p>
                    <div className="footer_social mt-4 md:mt-0">
                        <h2 className="text-[#31a2df] text-sm font-semibold">Get Social With Us</h2>
                        <ul className="social-links flex space-x-4 mt-2">
                            <li>
                                <a href="https://www.facebook.com" title="Facebook" target="_blank">
                                    {/* Add your Facebook icon here */}
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/company/vithi-it-solutions">
                                    {/* Add your LinkedIn icon here */}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FooterData;
