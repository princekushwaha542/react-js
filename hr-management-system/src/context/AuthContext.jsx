import React from 'react'
import Login from '../components/Auth/Login'
import LocalStorage from '../utils/localStorage'
const AuthContext = () => {
  return (
    <div>
      <LocalStorage />
      <Login></Login>
    </div>
  )
}

export default AuthContext
