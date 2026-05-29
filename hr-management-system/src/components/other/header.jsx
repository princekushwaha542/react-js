import React from 'react'

const Header = () => {
  return (
    <div className='m-5  flex items-center justify-between'>
        <h2 className='text-2xl text-black'>hello <br /><span className='text-3xl font-semibold text-black'>Prince 👋</span></h2>
        <button onClick={() => {
          localStorage.clear();
          window.location.reload();
        }} className='bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded'>Log out</button>
    </div>
  )
}

export default Header
