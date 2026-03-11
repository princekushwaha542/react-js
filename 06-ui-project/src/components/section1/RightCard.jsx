import React from 'react'
import { ArrowRight } from 'lucide-react';
const RightCard = (props) => {
  return (
    <div className='h-full w-80 rounded-4xl shrink-0 mr-4 overflow-hidden relative'>
      <img className='h-full w-full object-cover' src={props.img} alt="RightCardIMG" />
      <div className='h-full w-full absolute  top-0 left-0  flex flex-col justify-between
      p-8'>
        <h2 className='h-10 w-10 rounded-full flex items-center justify-center bg-white'>1</h2>
        <div>
            <p className='text-white mb-10 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis 
                 itaque accusamus laboriosam atque iure.</p>
                <div className='flex justify-between items-center'>
                 <button className=' bg-blue-600 text-white font-medium py-2 px-8 rounded-full'>{props.tag}</button>
                 <button className=' bg-blue-600 text-white font-medium py-2 px-3 rounded-full'> <ArrowRight /></button>
                </div>
        </div>
      </div>
    </div>

  )
}
 
export default RightCard
