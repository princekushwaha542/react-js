 import React, { useState } from 'react'
 
 const App = () => {
  const [val , setVal] = useState('')
   const SubmitHandler = (elem) =>{
    elem.preventDefault();
    console.log("form submited by",{val})
    setVal('')
   }
   return (
     <div>
       <form onSubmit={(e) =>{
        SubmitHandler(e)
       }}>
        <input name='input' type="text" placeholder='Enter your name'
        value={val}
        onChange={(e) =>{
          setVal(e.target.value);
        }}/>
        <button>click</button>
       </form>
     </div>
   )
 }
 
 export default App
 