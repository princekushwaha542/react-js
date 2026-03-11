import React from 'react'
import RightCard from './RightCard'
const RightText = (props) => {
  return (
    <div className='h-[80vh] w-2/3 p-6 flex items-center justify-around 
    overflow-x-auto '>
     { props.user.map(function(elem){
     
      return <RightCard img={elem.img} tag={elem.tag} />
     })}
    

    </div>
  )
}

export default RightText
