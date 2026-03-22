import React from 'react'

const App = () => {
  const user = {
  username: 'prince',
  age:19,
  city: 'rewa'
  }
  localStorage.setItem('user', JSON.stringify(user))
  return (
    <div>
      hello
    </div>
  )
}

export default App
