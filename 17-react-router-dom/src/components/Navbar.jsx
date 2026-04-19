import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
       <div className='flex justify-center align-center gap-5 text-white bg-black p-4'>
        <h3><Link to="/">Home</Link></h3>
        <h3><Link to="/about">About</Link></h3>
        <h3><Link to="/contact">Contact</Link></h3>
      </div>
    </div>
  )
}

export default Navbar
import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
       <div className='flex justify-center align-center gap-5 text-white bg-black p-4'>
        <h3><Link to="/">Home</Link></h3>
        <h3><Link to="/about">About</Link></h3>
        <h3><Link to="/contact">Contact</Link></h3>
      </div>
    </div>
  )
}

export default Navbar
