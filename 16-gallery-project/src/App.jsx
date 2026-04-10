import React, { useState } from 'react'
import axios from 'axios'

const App = () => {
  const [userData, setUserData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const GetData = async () => {
    try {
      setLoading(true)
      setError(null)

      const response = await axios.get('https://picsum.photos/v2/list')
      setUserData(response.data)

    } catch (err) {
      console.log(err)
      setError('Failed to fetch data')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='min-h-screen bg-black text-white p-6'>
      
      {/* Button */}
      <button 
        onClick={GetData}
        className='bg-green-400 px-6 py-3 mb-6 active:scale-95 text-xl text-black rounded-2xl'
      >
        Get Data
      </button>

      {/* Loading */}
      {loading && <h2 className='text-2xl'>Loading...</h2>}

      {/* Error */}
      {error && <h2 className='text-red-500 text-xl'>{error}</h2>}

      {/* Data */}
      <div className='flex flex-wrap gap-4'>
        {!loading && userData.length > 0 ? (
          userData.map((user) => (
            <div key={user.id} className='bg-gray-900 p-2 rounded-xl'>
              
              <img 
                className='h-40 w-60 object-cover rounded-lg'
                src={user.download_url} 
                alt={user.author}
              />

              <p className='text-sm mt-2 text-center'>
                {user.author}
              </p>

            </div>
          ))
        ) : (
          !loading && !error && <h2>No data available</h2>
        )}
      </div>

    </div>
  )
}

export default App