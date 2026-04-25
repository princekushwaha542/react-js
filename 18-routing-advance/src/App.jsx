import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'  

import Home from './filepage/Home'
import About from './filepage/About'
import Contact from './filepage/Contact'
import Service from './filepage/Service'
import File404 from './filepage/File404'

import { Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <div className='h-screen w-full bg-black text-white'>
    <Navbar />
    <Footer />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/service" element={<Service />} />
      <Route path="*" element={<File404 />} />
    </Routes>
    </div>
  )
}

export default App
