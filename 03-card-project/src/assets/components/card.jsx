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
        <h3>{props.companyName} <span>{props.datePosted}</span></h3>
        <h2>{props.post}</h2>
        <div>
          <h4>{props.tag1}</h4>
          <h4>{props.tag2}</h4>
        </div>
      </div>
      <div className="bottom">
         <div>
          <h1>{props.pay}</h1>
          <p>{props.location}</p>
         </div>
         <button>Apply </button>
      </div>
     </div>
    </>
  )
}

export default Card
