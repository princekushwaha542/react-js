import React, { useEffect, useState } from 'react'
const App = () => {
    
    const [a, setA] = useState(0)
    const [b, setB] = useState(10)

    function clickAbtn(){
        console.log('button A clicked')
        setA(a+1)
      
    }
    function clickBbtn() {
        console.log('button B clicked')
        setB(b+10)
    }

    useEffect(() => {
        console.log(a)
    },[a])

    useEffect ( () => {
        console.log(b)
    } ,[b] )
  return (
    <div>
      <h2>{a}</h2>
      <h2>{b}</h2>
      <button onClick={clickAbtn}>button A</button>
      <button onClick={clickBbtn}>button B</button>
    </div>
  )
}


export default App
