import React from 'react'

const App = () => {
  const submithandler = (elem) =>{
    elem.preventDefault()
    console.log(elem.target.textarea.value)
  }
  return (
    <div className='h-screen bg-black text-white flex flex-wrap'>
      <form onSubmit={(e) => {
       submithandler(e)
      }} className='flex p-10 flex-col gap-4 items-start lg:w-1/2 w-screen'>
          <h1 className='text-4xl font-bold'>Add Notes</h1>
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
       <div className='bg-black  pt-10 pl-19 lg:w-1/2 w-screen lg:border-l-2'>
          <h1 className='text-4xl font-bold'>Resent Notes</h1><br />
          <div className='flex flex-wrap gap-5  h-full overflow-auto '>
            <div className='h-62 w-50 rounded-2xl bg-white'></div>
            <div className='h-62 w-50 rounded-2xl bg-white'></div>
            <div className='h-62 w-50 rounded-2xl bg-white'></div>
            <div className='h-62 w-50 rounded-2xl bg-white'></div>
            <div className='h-62 w-50 rounded-2xl bg-white'></div>
            <div className='h-62 w-50 rounded-2xl bg-white'></div>
          
          </div>
       </div>
    </div>
  )
}

export default App
