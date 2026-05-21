import React from 'react'

const CreateTask = () => {
  return (
    <div>
       <form className='  pt-0 pb-2 flex  justify-between p-10 pr-70 bg-stone-200' >
        <div className='flex flex-col  items-start justify-start '>
          <div className='pt-5 pl-5 flexitems-center justify-center rounded-2xl'>
          <h3>Task Title</h3>
          <input className='w-80 h-8 rounded-l  mt-1 bg-stone-100 border border-white pl-5 p-3' type="text" placeholder='Make a UI design ' />
        </div>
    
        <div className='pt-5 pl-5 flexitems-center justify-center rounded-2xl'>
          <h3>Date</h3>
        <input className='w-80 h-8 rounded-l  mt-1 bg-stone-100 border border-white pl-5 p-3' type="date" />
        </div>
        <div className='pt-5 pl-5 flex flex-col items-start rounded-2xl'>
          <h3>Assign to </h3>
          <input className='w-80 h-8 rounded-l  mt-1 bg-stone-100 border border-white pl-5 p-3' type="text" placeholder='Employee name' />
        </div>
        <div className='pt-5 pl-5 flex flex-col items-start justify-center rounded-2xl'>
          <h3>Category</h3>
          <input className='w-80 h-8 rounded-l  mt-1 bg-stone-100 border border-white pl-5 ' type="text" placeholder='Design , Development etc.' />
        </div>
        </div>
        <div>
          <div className=' ml-90 mt-5'>
          <h3>Task Description</h3>
        <textarea className='w-110 h-60  border border-gray-800 pl-3 p-3' placeholder='Input description' />
        </div>
        <button className='ml-90 w-110 h-10 bg-green-400  text-white rounded-2xl mt-5' type='submit'>Create Task</button>
        </div>
       </form>
    </div>
  )
}

export default CreateTask
