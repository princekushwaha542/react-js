import React from 'react'

const Header = () => {
  return (
    <div className='m-5  flex items-center justify-between'>
        <h2 className='text-2xl text-white'>hello <br /><span className='text-3xl font-semibold text-white'>Prince 👋</span></h2>
        <button className='bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded'>Log out</button>
    </div>
  )
}

export default Header
