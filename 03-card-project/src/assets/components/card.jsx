import React from 'react'
import { Bookmark } from 'lucide-react'
const Card = (props) => {
  return (
    <>
     <div className="card">
      <div className="top">
        <img src={props.src} alt="" />
        <button className="save-btn"><Bookmark className='save-icon'/></button>
      </div>
      <div className="center"> 
        <h3>{props.companyName} <span>5 days ago</span></h3>
        <h2>{props.jobTitle}</h2>
        <div>
          <h4>{props.jobType}</h4>
          <h4>{props.level}</h4>
        </div>
      </div>
      <div className="bottom">
         <div>
          <h1>{props.salary}/hr</h1>
          <p>{props.location}</p>
         </div>
         <button>Apply </button>
      </div>
     </div>
    </>
  )
}

export default Card
