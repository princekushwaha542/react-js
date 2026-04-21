import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'


const App = () => {
  const [isAuth, setIsAuth] = useState(false)

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />

        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute isAuth={isAuth}>
              <Dashboard />
            </ProtectedRoute>
          } 
        />

        <Route path="/profile/:id" element={<Profile />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App