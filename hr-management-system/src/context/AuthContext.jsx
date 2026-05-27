import React, { useState } from 'react'
import Login from '../components/Auth/Login'
import { SetLocalStorage } from "../utils/localStorage";
import { GetLocalStorage } from "../utils/localStorage";

const AuthContext = () => {
  
  const [user, setUser] = useState(null);
     console.log('user', user);
  return (
    <div>
      {!user ? <Login />:''}
      <SetLocalStorage />
      <GetLocalStorage />
    </div>
  )
}

export default AuthContext
