import React from 'react'


const CloudDevOps = [{
    image:"https://www.vithiitsolutions.com/images/79f1ce974db8a3281ec4a6f56314ce88.jpg",
    title:"Cloud/DevOps",
    description:["Our DevOps engineers incorporate DevOps processes in your organization and use modern tools that complement our frameworks. We automate your cloud infrastructure and processes while ensuring continuous delivery and continuous integration to quickly get your product to the market. Our industry-leading DevOps services and market-validated DevOps best practices bring a feature-rich product to the market in a lower timeframe and cost.","With us, you can automate infrastructure, streamline operations, as well as facilitate Infra/Dev/Ops/QA/Security communication. We help clients to build a friction-free operational environment, and leverage secure coding practices. Our development and operations practices are industry-validated and based on modern industry standards. With our industry-leading DevOps engineers"]
}]
    
const DisplayData = ({image,heading,para}:{ image:string,heading:string,para:string}) => {
  return (
    <div>
    <div>
      {image}
    </div>
    <div>
    {heading}
    {para}
    </div>
    </div>
  )
}

export default DisplayData;
