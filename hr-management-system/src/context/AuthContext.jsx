import React, { useState } from 'react'
import Login from '../components/Auth/Login'
import { SetLocalStorage } from "../utils/localStorage";
import { GetLocalStorage } from "../utils/localStorage";
import AdminDashboard from '../components/Dashboard/AdminDashboard';
import UserDashboard from '../components/Dashboard/EmployeeDashboard';
const AuthContext = () => {

  const [user, setUser] = useState(null);
     console.log('user', user);

  const handelLogin = (email , password) =>{
    if (email == 'admin@example.com' && password ==  '123'){
      setUser('admin');
      console.log('Admin Login seccessful');
    }
    else if(email == 'user@example.com' && password ==  '123'){
      setUser('user');
      console.log('User Login seccessful');
    }
    else{
      alert('Invalid email or password');
    }
  } 
  return (
    <div>
      {!user ? <Login handelLogin={handelLogin} />:''}
      {user == 'admin'? <AdminDashboard /> : user == 'user' ? <UserDashboard /> :''}
      <SetLocalStorage />
      <GetLocalStorage />
    </div>
  )
}

export default AuthContext
