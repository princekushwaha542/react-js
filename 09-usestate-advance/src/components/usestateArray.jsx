import React, { useState } from 'react'

const UsestateArray = () => {
  const [num , setNum ] = useState({user:"Prince" , age:20}) 
  const btnclickd = () =>{

    const newNum = {...num}
    newNum.user = 'Aman'
    setNum(prev=>({...prev,user:'Aman'}))
  }
  return (
    <div>
      <h1>{num.user} {num.age}</h1>
      <button onClick={btnclickd}>click</button>
    </div>
  )
}

export default UsestateArray

