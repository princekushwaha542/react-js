import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='h-16 w-full bg-gray-800 text-white flex items-center justify-between px-10 border-b border-gray-700 shadow-md'>
      
      {/* Logo */}
      <h1 className='text-2xl font-bold text-cyan-400 tracking-wide cursor-pointer'>
        Prince Dev
      </h1>

      {/* Nav Links */}
      <div className='flex gap-10'>
        <Link
          className='text-lg font-medium hover:text-cyan-400 transition-all duration-300 hover:scale-110'
          to="/home"
        >
          Home
        </Link>

        <Link
          className='text-lg font-medium hover:text-cyan-400 transition-all duration-300 hover:scale-110'
          to="/about"
        >
          About
        </Link>

        <Link
          className='text-lg font-medium hover:text-cyan-400 transition-all duration-300 hover:scale-110'
          to="/contact"
        >
          Contact
        </Link>

        <Link
          className='text-lg font-medium hover:text-cyan-400 transition-all duration-300 hover:scale-110'
          to="/services"
        >
          Services
        </Link>
      </div>
    </div>
  )
}

export default Navbar