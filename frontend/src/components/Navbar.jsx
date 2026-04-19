import React from 'react'
import { useNavigate } from 'react-router-dom'
import assets from '../assets'

const Navbar = () => {
    const navigate = useNavigate()

    return (
        <div className='fixed z-50 w-full backdrop-blur-2xl flex justify-between items-center py-3 px-4 sm:px-20 xl:px-32'>

            {/* Logo Section */}
            <div className='flex items-center gap-1 cursor-pointer' onClick={() => navigate("/")}>
                <img src={assets.logo_lib} alt="logo" className='w-15 h-15' />
                <h1 className='text-lg font-semibold'>Gurukul Library</h1>
            </div>

            {/* Buttons */}
            <div className='flex gap-3'>
                <button 
                    onClick={() => navigate("/login")}
                    className='px-4 py-1 border rounded hover:bg-gray-200'
                >
                    Signup
                </button>

                <button 
                    onClick={() => navigate("/login")}
                    className='px-4 py-1 bg-blue-900 text-white rounded bg-blue-900'
                >
                    Login
                </button>
            </div>

        </div>
    )
}

export default Navbar