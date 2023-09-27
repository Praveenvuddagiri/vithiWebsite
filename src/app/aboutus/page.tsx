import React from 'react'
import TopBreadCrum from '../Components/TopBreadCrum'
import Navbar from '../Components/Navbar'
import AboutContentBox from '../Components/AboutContentBox'

const aboutUsTopData = {
  title: ' All Your Technology and Data Management Needs. One Group of Technology Experts. ',
  image: 'https://www.vithiitsolutions.com/images/0a3116c138ebf8b4636c0eb67914c2be.png',
  navigations: ['About Us']
}

const page = () => {
  return (
    <div>
      <Navbar /> 
      <div className='mt-24'>
        <TopBreadCrum title={aboutUsTopData.title} image={aboutUsTopData.image} navigations={aboutUsTopData.navigations}/>
      </div>
      <div>
        <AboutContentBox />
      </div>
      
    </div>
    
  )
}

export default page;
