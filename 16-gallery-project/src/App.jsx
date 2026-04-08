import React, { useState } from 'react'
import axios from 'axios'
const App = () => {
  const [ userData , setUserData ] = useState([])

  const GetData = async () =>{
    const response = await axios.get('https://picsum.photos/v2/list')
      setUserData(response.data)     
  }
  let printuserData = 'No user available';
  if(userData.length > 0){
    printuserData = userData.map((user,idx) => {
      return <div>
        <img className='h-40' src={user.download_url} alt="" />
      </div>
    })
  }
  return (
    <div className='h-screen bg-black text-white pt-4'>
       <button 
       onClick={GetData}
       className='bg-green-300 p-4 m-4 active:scale-95 text-2xl text-black rounded-2xl'
       >
        Get Data
       </button>
       <img src={userData} alt="image" />
       <img src={userData} alt="image" />
       <h1 className='flex flex-wrap gap-3 overflow-hidden'>{printuserData}</h1>
    </div>
  )
}

export default App
