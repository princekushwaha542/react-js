import React, { useState } from 'react'
import axios from 'axios'

const App = () => {
  const [userData, setUserData] = useState([])

  const GetData = async () => {
    try {
      const response = await axios.get('https://picsum.photos/v2/list')
      setUserData(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='min-h-screen bg-black text-white p-4'>
      
      <button 
        onClick={GetData}
        className='bg-green-300 p-4 m-4 active:scale-95 text-2xl text-black rounded-2xl'
      >
        Get Data
      </button>

      <div className='flex flex-wrap gap-4'>
        {userData.length > 0 ? (
          userData.map((user, idx) => (
            <div key={idx}>
              <img 
                className='h-40 rounded-lg' 
                src={user.download_url} 
                alt="img" 
              />
            </div>
          ))
        ) : (
          <h2>No data available</h2>
        )}
      </div>

    </div>
  )
}

export default App