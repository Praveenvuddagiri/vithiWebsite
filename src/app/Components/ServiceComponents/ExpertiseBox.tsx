"use client";
import React, { useState } from 'react'
import TabView from './TabView'
import TechnologyContentBox from './TechnologyContentBox';

const ExpertiseBox = ({tabs, expertise}:{tabs: string[], expertise:any}) => {
    const [currentTab,setCurrentTab]=useState(tabs[0]);

  return (
    <div className='w-full flex flex-col items-center justify-center mt-28 mb-24'>
      <TabView tabs={tabs} currentTab={currentTab} setCurrentTab={setCurrentTab}/> 
      <TechnologyContentBox currentTab={currentTab} expertise={expertise}/>
    </div>
  )
}

export default ExpertiseBox
