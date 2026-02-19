import React from 'react'

const card = (props) => {
  return (

    <div className="card">
              <h1>{props.name}</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, pariatur?</p>
              <button className='btn'>view profile</button>
            </div>
  )
}

export default card
