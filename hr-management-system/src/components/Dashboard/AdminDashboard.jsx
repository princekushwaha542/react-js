import React from 'react'
import Header from '../other/header'
const AdminDashboard = () => {
  return (
    <div>
      <Header />
       <form className='' >
        <div className='flex items-center justify-around w-screen'>
          <div>
        <h2>Task Title</h2>
        <input type="text" placeholder='input title' />
       </div>
        
        <div>
          <h3>Date</h3>
        <input type="date" />
        </div>
        <div>
          <h3>Assign to </h3>
          <input type="text" placeholder='employee name' />
        </div>
        <div>
          <h3>Category</h3>
          <input type="text" placeholder='Design , Development etc.' />
        </div>
        </div>
        <div className=' flex w-full block mt-20 items-center justify-center'>
          <h3>Task Description</h3>
        <textarea placeholder='input description' />
        </div>
        <button className='bg-red-500 p-2 rounded-2xl flex w-40 block mt-40 ml-150 items-center justify-center' type='submit'>Create Task</button>
       </form>
    </div>
  )
}

export default AdminDashboard
