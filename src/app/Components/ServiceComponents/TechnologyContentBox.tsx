import React from 'react'


const TechnologyContentBox = ({ currentTab, expertise }: { currentTab: string, expertise: any }) => {
  const currentTechData = expertise?.filter((exp: any) => exp.technology === currentTab)[0]?.data;
  return (
    <div>
      <div>
        {currentTechData?.image}
      </div>
      <div>
        {currentTechData?.title}
        {currentTechData?.description?.map((desc: string, index: number) => {
          return (
            <div key={index}>
              {desc}
            </div>
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
