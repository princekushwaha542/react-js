 import React from 'react'
 
 const App = () => {
   const SubmitHandler = (elem) =>{
    elem.preventDefault();
    console.log(elem.target.input.value)
   }
   return (
     <div>
       <form onSubmit={(e) =>{
        SubmitHandler(e)
       }}>
        <input name='input' type="text" placeholder='Enter your name'/>
        <button>click</button>
       </form>
     </div>
   )
 }
 
 export default App
 