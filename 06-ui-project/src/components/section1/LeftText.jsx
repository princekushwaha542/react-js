import React from 'react'
import { ArrowUpRight } from 'lucide-react';

const LeftText = () => {
  return (
    <div className='h-[80vh] w-1/3  flex flex-col justify-between'>
        <div className='text-2xl p-10 '>
          <h3 className='text-6xl font-bold pb-8'>Prospactiv <br /><span className='text-gray-700'>Costomer </span><br /> Sagmentation </h3>
          <p className='font-medium text-gray-600 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Tempora ratione architecto ut alias corporis in, enim nostrum hic fugit pariatur!
          </p>
      </div>
      <div className='text-4xl pl-9 pb-9'>
         <ArrowUpRight size={90} /> 
      </div>
    </div>
  )
}

export default LeftText
