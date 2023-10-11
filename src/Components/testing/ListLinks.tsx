import React from 'react'
import { BsArrowUpRight } from 'react-icons/bs'

const ListLinks = ({links}:{links:any[]}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4">
        {links?.map((item: any, index: number) => (
          <a
            href={item.link}
            key={index}
            className="text-secondary text-sm flex items-center font-semibold hover:text-primary "
          >
            {item?.title}
            <BsArrowUpRight size={15} className="ml-2" />
          </a>
        ))}
      </div>
  )
}

export default ListLinks
