import React from 'react'

const AllTask = () => {
  return (
    <div className="p-5  bg-stone-200 rounded-lg  h-50 overflow-auto">
      <div className="bg-[#df8484] p-5 rounded-lg mb-5">
        <h2>Prince</h2>
        <h3>Task Title: Make a UI design</h3>
        <h5 >status: In Progress</h5>
      </div>
      <div className="bg-[#df8484] p-5 rounded-lg mb-5">
        <h2>Amit</h2>
        <h3>Task Title: Manage API</h3>
        <h5 >status: In Progress</h5>
      </div><div className="bg-[#df8484] p-5 rounded-lg mb-5">
        <h2>Prince</h2>
        <h3>Task Title: Make a Data Base</h3>
        <h5 >status: Done</h5>
      </div><div className="bg-[#df8484] p-5 rounded-lg mb-5">
        <h2>Prince</h2>
        <h3>Task Title:  database</h3>
        <h5 >status: Done</h5>
      </div><div className="bg-[#df8484] p-5 rounded-lg mb-5">
        <h2>Amit</h2>
        <h3>Task Title: server site</h3>
        <h5 >status: In Progress</h5>
      </div>
    </div>
  )
}

export default AllTask
