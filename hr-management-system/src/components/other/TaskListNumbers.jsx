import React from 'react'

const TaskListNumbers = () => {
  return (
    <div className='flex screen gap-5 justify-between mt-10'>
      <div className='rounded-xl p-4 w-[45%] py-6 px-9 bg-[#ac8b8b] text-white'>
        <h2 className='text-3xl font-semibold'>1</h2>
        <p className='text-sm mt-2'>New task</p>
      </div>
      <div className='rounded-xl p-4 w-[45%] py-6 px-9 bg-[#69837d] text-white'>
        <h2 className='text-3xl font-semibold'>1</h2>
        <p className='text-sm mt-2'>New task</p>
      </div><div className='rounded-xl p-4 w-[45%] py-6 px-9 bg-[#9e6baa] text-white'>
        <h2 className='text-3xl font-semibold'>1</h2>
        <p className='text-sm mt-2'>New task</p>
      </div>
    </div>
  )
}

export default TaskListNumbers
