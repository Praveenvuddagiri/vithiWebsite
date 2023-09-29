import React from 'react'

const page = ({ params }: any) => {
  return (
    <div>
      {params.mainPath+ " / "+ params.subPath}
    </div>
  )
}

export default page
