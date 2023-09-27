"use client";
import React, { useState } from 'react'
import TabView from './TabView'

const ExpertiseBox = ({tabs}:any) => {
    const [currentTab,setCurrentTab]=useState(tabs[0]);
  return (
    <div>
      <TabView tabs={tabs} currentTab={currentTab} setCurrentTab={setCurrentTab}/> 
    </div>
  )
}

export default ExpertiseBox
