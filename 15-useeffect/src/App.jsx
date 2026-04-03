import React, { useEffect, useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0)

  useEffect(() =>{
    console.log('useEffect called')
  })
  return (
    <div>
      <button onClick={()=>{
        setNum(num+1)
      }}>click</button>
      <h1>{num}</h1>
    </div>
  )
}

export default App
