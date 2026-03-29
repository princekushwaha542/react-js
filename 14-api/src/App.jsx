import React from 'react'

const App = () => {
  const GetData = () => {
      const response = fetch('https://jsonplaceholder.typicode.com/todos/1')
      console.log(response)
    }
  return (
    <div>
      <button onClick={GetData}>click</button>
    </div>
  )
}

export default App
