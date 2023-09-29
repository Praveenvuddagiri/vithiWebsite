import React from 'react'
import CareerBox from '../Components/CareerComponents/CareerBox'
import CareerAboutBox from '../Components/CareerComponents/CareerAboutBox'
import CareerContactForm from '../Components/CareerComponents/CareerContactForm'

const page = () => {
  return (
    <div>
      <CareerAboutBox />
      {/* <CareerBox /> */}
      <CareerContactForm />
    </div>
  )
}

export default page
