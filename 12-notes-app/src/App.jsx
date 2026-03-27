import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('') 
  const [details, setDetails] = useState('') 
  const [task , setTask] = useState([])

  const submithandler = (e) => {
  e.preventDefault()

  const copyTask = [...task]
  copyTask.push({ title, details })

  setTask(copyTask)
  console.log(task)
  setTitle('')
  setDetails('')
}

  return (
    <div className='h-screen bg-black text-white flex flex-wrap'>
      <form onSubmit={submithandler} className='flex p-10 flex-col gap-4 items-start lg:w-1/2 w-screen'>
        <h1 className='text-4xl font-bold'>Add Notes</h1>

        <input 
          type="text"
          placeholder='Enter Notes Heading' 
          className='px-5 py-2 border-2 rounded-xl w-full font-medium'
          value={title}
          onChange={(e) => setTitle(e.target.value)} 
        />

        <textarea 
          placeholder='Write Details' 
          className='px-5 py-2 h-40 border-2 rounded-xl w-full outline-none font-medium'
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />

        <button className='bg-white text-black px-5 py-3 active:bg-gray-400 rounded-xl w-full font-medium'
         >
          Add Note
        </button>
      </form>

      <div className='bg-black pt-10 pl-19 lg:w-1/2 w-screen lg:border-l-2'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1><br />
        <div className='flex flex-wrap gap-5 h-full overflow-auto'>
          {task.map((e,idx) =>{
            return <div key={idx} className='h-62 w-50 rounded-2xl text-black bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScVj4sD1SinFKKGDTgNYFrAQnBJX6jku1dAg&s")] bg-center bg-cover rotate-360'>
              <h3 className='m-3 leading-tight font-bold uppercase text-xl'  >{e.title}</h3>
              <p className='m-2 leading-tight text-gray-500 font-medium'>{e.details}</p>
            </div>
          })}
         </div>
      </div>
    </div>
  )
}

export default App