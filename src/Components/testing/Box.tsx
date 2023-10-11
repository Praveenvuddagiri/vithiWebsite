import React from 'react'

const Box = ({children, right}:{children: React.ReactNode, right: boolean}) => {
  return (
    <div className='flex justify-center'>
            <div className={`flex ${right ? "flex-col md:flex-row" : "flex-col-reverse md:flex-row-reverse"} items-center mb-24 w-[90%] justify-center`}>
                {children}
            </div>
        </div>

  )
}

export default Box



