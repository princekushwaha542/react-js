import React from 'react'
import { Link, Outlet } from 'react-router-dom'

import Phone from './Phone'
import Email from './Gmail'
import Address from './Address'

const Contact = () => {
  return (
    <div>
      <div className='flex justify-center gap-10 py-4'>
        <Link className="text-xl font-bold text-green-400 "  to='phone'>Phone</Link>
        <Link className="text-xl font-bold text-green-400 " to='email'>Email</Link>
        <Link className="text-xl font-bold text-green-400 " to='address'>Address</Link>
      </div>

      <Outlet />
    </div>
  )
}

export default Contact