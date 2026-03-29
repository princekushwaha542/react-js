import React from 'react'

const App = () => {
  const GetData = async () => {
      const response =  await fetch('https://jsonplaceholder.typicode.com/todos/1')
      const data = await  response.json()
      console.log(data)
    }
  return (
    <div>
      <button onClick={GetData}>click</button>
    </div>
  )
}

export default App
