import React from 'react'
import Header from '../other/header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'
const EmployeeDashboard = () => {
  return (
    <div className='p-10 bg-[#373636] h-screen'>
      <Header/>
      <TaskListNumbers/>
      <TaskList/>
    </div>
  )
}

export default EmployeeDashboard
