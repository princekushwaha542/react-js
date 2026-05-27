import React from 'react'
import Login from '../components/Auth/Login'
import { SetLocalStorage } from "../utils/localStorage";
const AuthContext = () => {
  return (
    <div>
      <SetLocalStorage />
      <Login></Login>
    </div>
  )
}

export default AuthContext
