import React from 'react'
import Card from './componet/card'
const App = () => {
  return (
    <div>
      
      <div className="parent">
        <Card />
        <Card user='prince' />
        <Card />
        <Card />
        <Card />
        
      </div>
    </div>
  )
}

export default App
