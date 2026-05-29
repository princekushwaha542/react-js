import React, { useState } from 'react'
import Login from '../components/Auth/Login'
import { SetLocalStorage } from "../utils/localStorage";
import { GetLocalStorage } from "../utils/localStorage";
import { AdminData } from "../utils/localStorage";
import { EmployeesData } from "../utils/localStorage";

import AdminDashboard from '../components/Dashboard/AdminDashboard';
import UserDashboard from '../components/Dashboard/EmployeeDashboard';

const AuthContext = () => {

  const adminEmail = AdminData()[0].email;
  const adminPassword = AdminData()[0].password;

  const employees = EmployeesData();

  const [user, setUser] = useState(null);

  const handelLogin = (email , password) =>{

    // Admin Login
    if (email == adminEmail && password == adminPassword){
      setUser('admin');
    }

    // Employee Login
    else{

      const employee = employees.find((emp)=>{
        return emp.email == email && emp.password == password
      })

      if(employee){
        setUser('user');
        console.log(employee);
      }
      else{
        alert('Invalid email or password');
      }
    }
  } 

  return (
    <div>
     
      {!user ? <Login handelLogin={handelLogin} /> : ''}

      {user == 'admin' 
        ? <AdminDashboard /> 
        : user == 'user' 
        ? <UserDashboard /> 
        : ''
      }

      <SetLocalStorage />
      <GetLocalStorage />

    </div>
  )
}

export default AuthContext