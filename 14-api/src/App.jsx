import React from 'react'

const App = () => {
  const GetData = async () => {
      const response =  await fetch('https://picsum.photos/v2/list?page=2&limit=100')
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
