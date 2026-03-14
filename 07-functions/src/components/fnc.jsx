import React from 'react'

const Fnc = () => {
   const click = () =>{
     const text = document.getElementById('text')
     text.innerText = 'Hello Prince'
     alert('you have clicked this button')
    }
  return (
      <div>
       <h1 id="text"> hello guse</h1>
       <button onClick={click}> click here</button>
      <button onClick={()=>{
     alert('you have clicked second button')
      }
      }> click me</button>
     </div>
  )
}

export default Fnc

