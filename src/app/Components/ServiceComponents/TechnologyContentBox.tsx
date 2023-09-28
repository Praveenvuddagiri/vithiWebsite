import React from 'react'


const TechnologyContentBox = ({ currentTab, expertise }: { currentTab: string, expertise: any }) => {
  const currentTechData = expertise?.filter((exp: any) => exp.technology === currentTab)[0]?.data;
  return (
    <div className='grid grid-cols-12 gap-10'>
      <div className='p-0 m-0 md:col-span-4'>
        <img className='w-[100%] p-[40px] border-solid border-2 border-[#707070]' src={currentTechData?.image} alt="" />
      </div>

      <div className='md:col-span-8'>
        <h3 className='text-[30px] font-semibold text-[#1e85bd]'>{currentTechData?.title}</h3>
    
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
