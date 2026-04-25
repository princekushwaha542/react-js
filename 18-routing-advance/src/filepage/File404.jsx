import React from 'react'

const File404 = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-black text-white">
      <h1 className="text-7xl font-bold">404</h1>
      <h2 className="text-3xl mt-4">Page Not Found</h2>
      <p className="mt-2 text-gray-400">
        The page you are looking for does not exist.
      </p>

      <a
        href="/"
        className="mt-6 px-6 py-2 bg-white text-black rounded-lg"
      >
        Go to Home Page
      </a>
    </div>
  )
}

export default File404