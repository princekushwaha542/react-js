import React, { useEffect, useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0)
  const [num2, setNum2] = useState(100)

  useEffect(() =>{
    console.log('useEffect called')
  },[num])
  return (
    <div>
      <button onClick={()=>{
        setNum(num+1)
        setNum2(num2+10)

      }}>click</button>
      <h1>{num}</h1>
    </div>
  )
}

export default App
