import MoveToTop from '@/app/Components/MoveToUp';
import Navbar from '@/app/Components/Navbar';
import ExpertiseBox from '@/app/Components/ServiceComponents/ExpertiseBox';
import ServiceAboutContentBox from '@/app/Components/ServiceComponents/ServiceAboutContentBox';
import TopBreadCrum from '@/app/Components/TopBreadCrum';
import Footer from '@/app/Footer/Footer';
import { serviceData } from '@/constant';
import React from 'react'


const Service = ({ params }: any) => {
    const serviceSlug = params.service;
    const pageData: any = serviceData.filter((service) => service.slug === serviceSlug)[0];
    
    
    const top = pageData?.top;
    const about = pageData?.about;
    const expertise = pageData?.expertise;
    const tabs=expertise?.map((e:any)=>{
      return e.technology;
    })

    return (
        <div>
            <Navbar active='services' />

            <div className='mt-24'>
                <TopBreadCrum title={top?.title} image={top?.image} navigations={top?.navigations} />
            </div>
            <ServiceAboutContentBox title={about?.title} heading={about?.heading} para={about?.para} />
            <ExpertiseBox tabs={tabs} />


            <Footer />
            <MoveToTop />
        </div>
    )
}

export default Service