import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='h-15 w-full bg-gray-500 flex items-center justify-between pr-20 '>
      <h1 className='text-xl font-bold w-110 ml-20'>Shyriansh</h1>
       <div className='flex gap-10'>
        <Link className='text-lg font-medium' to="/home">Home</Link>
        <Link className='text-lg font-medium' to="/about">About</Link>
        <Link className='text-lg font-medium' to="/contact">Contact</Link>
        <Link className='text-lg font-medium' to="/services">Services</Link>
      </div>
    </div>
  )
}

export default Navbar
