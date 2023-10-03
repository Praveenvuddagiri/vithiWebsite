import React from 'react'
import TopBreadCrum from '@/Components/CommonComponents/TopBreadCrum'
import Navbar from '@/Components/CommonComponents/Navbar'
import AboutContentBox from '@/Components/AboutComponents/AboutContentBox'
import About from '@/Components/AboutComponents/KeyDifferences'
import Footer from '@/Components/CommonComponents/Footer'
import CoreValuesList from '@/Components/AboutComponents/CoreValues'
import AboutVisionBox from '@/Components/AboutComponents/AboutVisionBox'
import { Metadata } from 'next'
import MoveToTop from '@/Components/CommonComponents/MoveToUp'
import {Keydifference, coreValuesData} from '@/utilities/constant'


const aboutUsTopData = {
  title: ' All Your Technology and Data Management Needs. One Group of Technology Experts. ',
  image: 'https://www.vithiitsolutions.com/images/0a3116c138ebf8b4636c0eb67914c2be.png',
  navigations: ['About Us']
}

const visionPoints = [
  "Supporting our customers in getting their breakthrough products to milestones and market faster.",
  "To continuously create new opportunities for growth in your strategic business.",
  "Passionately helping business through innovative technologies to reach the business dreams.",
  "To develop lasting client relationships by providing exceptional stakeholder value in an environment of trust and respect."
];


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
        <AboutContentBox title="ABOUT VITHI IT SOLUTIONS" 
        heading="We are data, technology, Integration and digital Innovation experts who provide services and support to help you get the most out of your organizational data." 
        content="Vithi IT Solutions is a global IT services provider and a digital transformation partner focused upon providing great value to clients worldwide with cost-effective, integrated, responsive and trustworthy IT solutions. We offer a wide bouquet of services and solutions in operations, consulting, digital, and technology and enable enterprises to overcome critical business challenges."/>
      </div>
      <AboutVisionBox image="https://www.vithiitsolutions.com/images/25290e5e13bb2803eaccb15365bbca98.jpg"
        content="At Vithi IT Solutions, we’re driven by the purpose of 'Building your Business'"
        visionPoints={visionPoints}
      />
      <About bgImage="http://www.vithiitsolutions.com/images/team-business-people-stacking-.jpg" 
      content="Vithi has an excellent track record of Managing, Designing, Implementing & Deploying numerous projects which are mission critical to our customers focused mainly on on-time delivery with quality driven by SMEs across technologies." 
      differences={Keydifference} />
      <CoreValuesList valuesList={coreValuesData}/>
      <Footer />
      <MoveToTop />
    </div>
    
  )
}

export default page;
