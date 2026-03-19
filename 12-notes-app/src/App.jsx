import React from 'react'

const App = () => {
  const submithandler = (elem) =>{
    elem.preventDefault()
    console.log(elem.target.textarea.value)
  }
  return (
    <div className='h-screen bg-black text-white '>
      <form onSubmit={(e) => {
       submithandler(e)
      }} className='flex p-10 flex-col gap-4 items-start w-1/2'>
          <input 
        type="text" name='title'
        placeholder='Enter Notes Heading' 
        className='px-5 py-2 border-2 rounded-xl w-full font-medium'
        />
         <textarea 
        type="text" name='textarea'
        placeholder='Write Details' 
        className='px-5 py-2 h-40 border-2 rounded-xl w-full flex-start outline-none flex-row font-medium'
        />
        <button className='bg-white text-black px-5 py-3 rounded-xl w-full font-medium'>Add Note</button>
      </form>
    </div>
  )
}

export default App
