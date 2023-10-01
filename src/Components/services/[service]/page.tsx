import MoveToTop from '@/Components/CommonComponents/MoveToUp';
import Navbar from '@/Components/CommonComponents/Navbar';
import ExpertiseBox from '@/Components/ServiceComponents/ExpertiseBox';
import ServiceAboutContentBox from '@/Components/ServiceComponents/ServiceAboutContentBox';
import TopBreadCrum from '@/Components/CommonComponents/TopBreadCrum';
import Footer from '@/Components/CommonComponents/Footer';
import { serviceData } from '@/utilities/constant';
import { Metadata } from 'next';
import React from 'react'


export const metadata: Metadata = {
    title: 'Service',
    description: 'VITHI IT SOLUTIONS',
  }

const Service = ({ params }: any) => {
    const serviceSlug = params.service;
    const pageData: any = serviceData.filter((service) => service.slug === serviceSlug)[0];
    
    
    const top = pageData?.top;
    const about = pageData?.about;
    const expertise = pageData?.expertise;
    

    return (
        <div>
            <Navbar active='services' />

            <div className='mt-24'>
                <TopBreadCrum title={top?.title} image={top?.image} navigations={top?.navigations} />
            </div>
            <ServiceAboutContentBox title={about?.title} heading={about?.heading} para={about?.para} />
            <ExpertiseBox expertise={expertise}/>
            <Footer />
            <MoveToTop />
        </div>
    )
}

export default Service