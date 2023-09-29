import React from 'react';

const servicesData = [
    { name: 'ERP Solutions' },
    { name: 'Full Stack Web Development' },
    { name: 'ERP' },
    { name: 'Mobile Development' },
];

const HomeServicesBox = () => {
    return (
        <div className="min-h-full mt-10 mb-10 flex items-center justify-center">
            <div className="w-11/12 md:w-10/12 lg:w-4/5 bg-blue-800 pt-7 pr-7 pb-7 pl-7 md:pb-0 md:pl-0 rounded-lg shadow-xl">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="w-full md:w-1/3 flex flex-col justify-center items-center">
                        <h2 className="text-white text-4xl font-bold mb-4 leading-10">
                            Tailored business
                            <br />
                            IT solutions
                        </h2>
                        <img
                            src="https://www.vithiitsolutions.com/images/d1396c00380f0c0388ef46391f3d973c.png"
                            alt="Left Image"
                            className="w-full"
                        />
                    </div>

                    {/* Right box with content and services */}
                    <div className="w-full md:w-2/3 flex flex-col justify-start">
                        <div className="text-white text-2xl font-semibold mb-4">
                            <h2 className="mb-5">Application Development</h2>
                            <p className="text-base">
                                Vithi IT Solutions builds custom applications using existing and emerging technologies
                                that work well with any software portfolio to meet specific business requirements.
                                We can create solutions for meeting the most challenging IT problems.
                                <br />
                                <a
                                    className="text-green-600 border-b-2 border-b-green-600 hover:text-green-400"
                                    href="http://www.vithiitsolutions.com/service/application-development"
                                >
                                    know More
                                </a>
                            </p>
                        </div>
                        {/* Services */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {servicesData.map((service, index) => (
                                <div
                                    key={index}
                                    className="border-l-4 border-l-green-500 p-4 bg-white rounded-lg shadow-md hover:transform hover:-translate-y-1 transition-transform duration-300"
                                >
                                    <h3 className="text-black text-lg font-semibold">{service.name}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeServicesBox;
