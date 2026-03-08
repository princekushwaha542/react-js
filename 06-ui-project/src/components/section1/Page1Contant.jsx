import React from 'react'
import LeftText from './LeftText'
import RightText from './RightText'
const Page1Content = () => {
  return (
    <div className='h-screen w-full flex gap-4 bg-cover pl-10 pr-10'>
      <LeftText />
      <RightText />
    </div>
  )
}

export default Page1Content
