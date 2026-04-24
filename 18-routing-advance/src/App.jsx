import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'  
const App = () => {
  return (
    <div className='h-screen w-full bg-black text-white'>
    <Navbar />
    <Footer />
    <h1>this is a routing</h1>
    </div>
  )
}

export default App
