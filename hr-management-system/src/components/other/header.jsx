import React from 'react'

const Header = () => {
  return (
    <div className='m-5 text-black flex items-center justify-between'>
        <h2 className='text-2xl'>hello <br /><span className='text-3xl font-semibold'>Prince 👋</span></h2>
        <button className='bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded'>Log out</button>
    </div>
  )
}

export default Header
