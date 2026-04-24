import React from 'react'

const Navbar = () => {
  return (
    <div className='h-15 w-full bg-gray-500 flex items-center justify-between pr-20 '>
      <h1 className='text-xl font-bold w-110 ml-20'>Shyriansh</h1>
      <div className='flex gap-10'>
      <a href="/home">Home</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
      <a href="/services">Services</a>
      </div>
    </div>
  )
}

export default Navbar
