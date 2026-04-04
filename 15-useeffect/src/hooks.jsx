import React, { useEffect, useState } from 'react'

const hooks = () => {
    
    const [a, setA] = useState(0)
    const [b, setB] = useState(10)

    function clickAbtn(){
        console.log('button A clicked')

    }
    function clickBbtn() {
        console.log('button B clicked')
    }

    useEffect(() => {
        clickAbtn()
    },[a])

    useEffect ( () => {
        clickBbtn()

    } ,[b] )
  return (
    <div>
      <button>button A</button>
      <button>button B</button>
    </div>
  )
}

export default hooks
