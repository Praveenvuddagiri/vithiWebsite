import React from 'react'

const CareersBoxBenefit = ({image,title,content}:{image:string,title:string,content:string}) => {
  return (
    <div>
      <div>
        <img src={image} alt={title} />
      </div>
      <div>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  )
}

export default CareersBoxBenefit
