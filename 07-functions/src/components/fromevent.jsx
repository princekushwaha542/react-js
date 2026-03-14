import React from 'react'

const Fromevent = () => {
  return (
    <div className='h-screen w-full'>
      <div onMouseMove={function(val){
        console.log(val.clientX  )
      }} className=' h-1/2 w-1/5 bg-blue-400 m-20'></div>
    </div>
   /* <div>
      <input onChange={function(val) {
        console.log(val.target.value)
      }} type="text" placeholder='enter your name' />
    </div>*/
  )
}

export default Fromevent
