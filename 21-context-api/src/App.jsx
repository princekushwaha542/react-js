import React, { useContext } from 'react'
import Navbar from './components/Navbar'
import Nav2 from './components/Nav2'
import {PostContextData} from './ThmeContext'
const App = () => {
  const data = useContext(PostContextData)
  console.log(data)
  return (
  
    <div className='flex bg-gray-300 w-full h-10 justify-between items-center p-6'>
      <Navbar></Navbar>
      <Nav2></Nav2>
      
    </div>
  )
}

export default App
