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
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />}>
        <Route path='phone' element={<Phone />} />
        <Route path='email' element={<Email />} />
        <Route path='address' element={<Address />} />
      </Route>
      <Route path="/services" element={<Service />} />
      <Route path="*" element={<File404 />} />
    </Routes>
    </div>
  )
}

export default App
