import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

const App = () => {
  return (
    <div>
      <div className='flex justify-center align-center gap-5 text-white bg-black p-4'>
        <h3><Link to="/">Home</Link></h3>
        <h3><Link to="/about">About</Link></h3>
        <h3><Link to="/contact">Contact</Link></h3>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App