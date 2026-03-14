import React from 'react'

const App = () => {
  let a = 20;
  const changeA = () =>{
    console.log(a);
    a++;
    console.log(a)
  }
  return (
    <div>
      <h1>vlaue of a {a} </h1>
      <button onClick={changeA}>click</button>
    </div>
  )
}

export default App
