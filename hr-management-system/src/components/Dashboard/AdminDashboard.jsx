import React from 'react'
import Header from '../other/header'
const AdminDashboard = () => {
  return (
    <div>
      <Header />
       <form className=' bg-red-50 pt-20 pb-25' >
        <div className='flex items-center justify-around w-screen'>
          <div className='p-5 flex flex-col bg-red-200 items-center justify-center rounded-2xl'>
          <h3>Task Title</h3>
          <input className='w-52 h-6 bg-white border border-gray-800 pl-5 p-3' type="text" placeholder='input title' />
        </div>
        
        <div className='p-5 flex flex-col bg-red-200 items-center justify-center rounded-2xl'>
          <h3>Date</h3>
        <input className='w-52 h-6 bg-white border border-gray-800 pl-5 p-3' type="date" />
        </div>
        <div className='p-5 flex flex-col bg-red-200 items-center justify-center rounded-2xl'>
          <h3>Assign to </h3>
          <input className='w-52 h-6 bg-white border border-gray-800 pl-5 p-3' type="text" placeholder='employee name' />
        </div>
        <div className='p-5 flex flex-col bg-red-200 items-center justify-center rounded-2xl'>
          <h3>Category</h3>
          <input className='w-52 h-6 bg-white border border-gray-800 pl-3 p-3' type="text" placeholder='Design , Development etc.' />
        </div>
        </div>
        <div className=' flex w-full block gap-5 mt-20 items-center justify-start pl-100'>
          <h3>Task Description</h3>
        <textarea className='w-70 h-14 bg-white border border-gray-800 pl-3 p-3' placeholder='input description' />
        </div>
        <button className='bg-red-500 p-2 rounded-2xl flex w-40 block mt-40 ml-150 items-center justify-center' type='submit'>Create Task</button>
       </form>
    </div>
  )
}

export default AdminDashboard
