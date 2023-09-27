import Navbar from '@/app/Components/Navbar';
import ServiceAboutContentBox from '@/app/Components/ServiceComponents/ServiceAboutContentBox';
import TopBreadCrum from '@/app/Components/TopBreadCrum';
import Footer from '@/app/Footer/Footer';
import React from 'react'

const Service = ({params}:any) => {
    const serviceSlug = params.service;
    // const pageData = serviceData.filter((service)=> service.slug === serviceSlug);
  return (
    <div>
        <Navbar active='services'/>
        <TopBreadCrum title={} image={} navigations={}/>
        <ServiceAboutContentBox title={} heading={} para={}/>


        <Footer />
    </div>
  )
}

export default Service