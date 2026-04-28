import React from 'react'

const Contact = () => {
  return (
    <div className='flex justify-center gap-10 py-4'>
     <Link className="text-xl" to="contact/phone">Phone</Link>
     <Link className="text-xl" to="contact/email">Email</Link>
    <Link className="text-xl" to="contact/address">Address</Link>
    </div>
  )
}

export default Contact
