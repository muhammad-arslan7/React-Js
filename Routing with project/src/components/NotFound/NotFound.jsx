import React from 'react'

function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="text-center">
        <div className="mb-8">
          <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-blue-500 mx-auto"></div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-gray-700 mb-4">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-blue-700 mb-4">
          Page under Development
        </h2>
        <p className="text-gray-400 text-lg md:text-xl max-w-md mx-auto mb-8">
          We're currently working on something awesome.
          This page is under development.
        </p>
        
        <a 
          href="/"
          className="inline-block px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-300"
        >
          Back to Home
        </a>
      </div>
    </div>
  )
}

export default NotFound