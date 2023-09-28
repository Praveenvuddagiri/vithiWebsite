import React from 'react'


const TechnologyContentBox = ({ currentTab, expertise }: { currentTab: string, expertise: any }) => {
  const currentTechData = expertise?.filter((exp: any) => exp.technology === currentTab)[0]?.data;
  return (
    <div className='flex gap-[40px] '>
      <div className='w-full'>  
        <img src={currentTechData?.image} alt="{currentTechData?.title}" className='p-[40px] border-[1px] border-[#707070] w-full'/>
      </div>
      <div>
        <h2 className='text-[#1e85bd] font-[700] mb-[20px] text-[32px]'>{currentTechData?.title}</h2>
        {currentTechData?.description?.map((desc: string, index: number) => {
          return (
            <p className='leading-[21px] font-[14px] text-[#595a5b] text-[600] mt-6' key={index}>
              {desc}
            </p>
          )
        })}
        {currentTechData?.workList &&
          <div>
            <h3>{currentTechData.workList.title}</h3>
            <ul>
              {currentTechData.workList.list?.map((l: string, index: number) => <li key={index}>{l}</li>)}
            </ul>
          </div>
        }
      </div>
    </div>
  )
}

export default TechnologyContentBox;
