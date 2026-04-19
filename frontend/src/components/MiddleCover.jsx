import React from 'react'
import assets from '../assets'

const MiddleCover = () => {
  return (
    <div
      className="h-[450px] bg-cover bg-center bg-no-repeat flex items-center justify-center relative"
      style={{ backgroundImage: `url(${assets.cover_lib})` }}
    >
      {/* Dark + Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>

      {/* Content */}
      <div className="relative text-center px-6">
        <h1 className="text-white text-3xl md:text-5xl font-extrabold leading-tight drop-shadow-lg">
          Digital Library Solution  
          <span className="block text-yellow-400 mt-2">
            Easy Book Tracking
          </span>
        </h1>

        {/* Optional subtitle */}
        <p className="text-gray-200 mt-4 text-sm md:text-lg max-w-xl mx-auto">
          Manage books, users, and records efficiently with a modern digital library system.
        </p>
      </div>
    </div>
  )
}

export default MiddleCover