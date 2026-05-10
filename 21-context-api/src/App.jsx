import React from 'react'
import Navbar from './components/Navbar'
import Nav2 from './components/Nav2'
const App = () => {
  return (
    <div className='flex bg-gray-300 w-full h-10 justify-between items-center p-6'>
      <Navbar></Navbar>
      <Nav2></Nav2>
    </div>
  )
}

export default App
