import React from 'react'
import LeftText from './LeftText'
import RightText from './RightText'
const Page1Content = (props) => {
  return (
    <div className='h-screen w-full flex gap-4 bg-cover pl-10 pr-10 '>
      <LeftText />
      <RightText user={props.user} />
    </div>
  )
}

export default Page1Content
