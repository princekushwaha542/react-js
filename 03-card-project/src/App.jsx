import React from 'react'
import { Bookmark } from 'lucide-react'

const App = () => {
  return (
    <div className='parent'>
     <div className="card">
      <div className="top">
        <img src="https://media.wired.com/photos/5a99ba72927dc94e67685b9b/191:100/w_1280,c_limit/amazon-a-logo.jpg" alt="" />
        <button className="save-btn">Save<Bookmark className='save-icon'/></button>
      </div>
      <div className="center">
        <h3>Amazon <span>5 days ago</span></h3>
        <h2>Senior UI/UX Designer</h2>
        <div>
          <h4>Part Time</h4>
          <h4>Senior lavel</h4>
        </div>
      </div>
      <div className="bottom">
         <div>
          <h1>$120/hr</h1>
          <p>Mumbai , India</p>
         </div>
         <button>Apply </button>
      </div>
     </div>
    </div>
  )
}

export default App

