import React from 'react'
import TopBreadCrum from '@/Components/TopBreadCrum'
import Navbar from '@/Components/Navbar'
import AboutContentBox from '@/Components/AboutContentBox'
import About from '@/Components/KeyDifferences'
import Footer from '@/Components/Footer/Footer'
import CoreValuesList from '@/Components/CoreValues/CoreValuesData'
import AboutVisionBox from '@/Components/AboutVisionBox'
import { Metadata } from 'next'
import MoveToTop from '@/Components/MoveToUp'

const aboutUsTopData = {
  title: ' All Your Technology and Data Management Needs. One Group of Technology Experts. ',
  image: 'https://www.vithiitsolutions.com/images/0a3116c138ebf8b4636c0eb67914c2be.png',
  navigations: ['About Us']
}


export const metadata: Metadata = {
  title: 'About Us',
  description: 'VITHI IT SOLUTIONS',
}

const page = () => {
  return (
    <div>
      <Navbar active='aboutus'/> 
      <div className='mt-24'>
        <TopBreadCrum title={aboutUsTopData.title} image={aboutUsTopData.image} navigations={aboutUsTopData.navigations}/>
      </div>
      <div className='w-full'>
        <AboutContentBox />
      </div>
      <AboutVisionBox />
      <About/>
      <CoreValuesList/>
      <Footer />
      <MoveToTop />
    </div>
    
  )
}

export default page;
