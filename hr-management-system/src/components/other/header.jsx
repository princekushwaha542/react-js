import React from 'react'

const Header = () => {
  return (
    <div className='text-white flex items-center justify-between'>
        <h2 className='text-2xl'>hello <br /><span className='text-3xl font-semibold'>Prince 👋</span></h2>
        <button>Log out</button>
    </div>
  )
}

export default Header
