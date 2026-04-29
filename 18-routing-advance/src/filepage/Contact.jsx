import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
      <div className='flex justify-center gap-10 py-4'>
        <Link className="text-xl" to="phone">Phone</Link>
        <Link className="text-xl" to="email">Email</Link>
        <Link className="text-xl" to="address">Address</Link>
      </div>

      <Outlet />
    </div>
  )
}

export default Contact