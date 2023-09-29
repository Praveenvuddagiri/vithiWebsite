import React from 'react'
import ContactDetails from '../Components/ContactComponent/ContactDetails'
import Navbar from '../Components/Navbar'
import TopBreadCrum from '../Components/TopBreadCrum'
import { Metadata } from 'next'


const aboutUsTopData = {
  title: ' We are just an email, call or inquiry form away.',
  image: 'http://www.vithiitsolutions.com/images/e2161c861f0bf481f33750f909300ac8.png',
  navigations: ['Contact Us']
}


export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'VITHI IT SOLUTIONS',
}


const page = () => {
  return (
    <div>
      <Navbar active='aboutus'/> 
      <div className='mt-24'>
        <TopBreadCrum title={aboutUsTopData.title} image={aboutUsTopData.image} navigations={aboutUsTopData.navigations}/>
      </div>
      <ContactDetails  />
    </div>
  )
}

export default page
