import React, { useActionState, useState, useSyncExternalStore } from 'react'

const App = () => {
  const [num , setNum ] = useState(0) 
  return (
    <div>
      <h1 className="p-20 m-5 bg-red-50 w-90 text-center text-4xl">{num}</h1>
      <button onClick={ () =>{
        setNum(num+1)
      }} className='h-15 w-40 p-5 bg-yellow-500 ml-5 mr-5 '>increase</button>
      <button onClick={() =>{
        setNum(num-1)
      }} className='h-15 w-40 p-5 bg-yellow-500 ml-5 mr-5 text-uppercase'>dicrease</button>
    </div>
  )
} 
export default App
