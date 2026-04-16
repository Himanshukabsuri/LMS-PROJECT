import {ArrowRightIcon, ShieldIcon, UserIcon } from 'lucide-react'
import React from 'react'
import LoginLeft from '../components/LoginLeft'
import { Link } from 'react-router-dom'

const LoginLoading = () => {

    const portalOptions = [
        {
            to:"/login/admin",
            title:"Admin Portal",
            description:"Manage student,bookshell,addmission and system configurations.",
            icon:ShieldIcon
        },
        {
            to:"/login/user",
            title:"User Portal",
            description:"View your profile,track book,request time off and access payslips.",
            icon:UserIcon
        },
    ]
  return (
    <div className='min-h-screen flex flex-col md:flex-row'>

      <LoginLeft/>

      <div className='w-full md:w-1/2 flex items-center justify-center p-6 sm:p-12 lg:p-16'>

        <div className='w-full max-w-md animate-fade-in'>

          {/* Header */}
          <div className='mb-10 text-center md:text-left'>
            <h2 className='text-3xl font-medium text-slate-900 mb-3'>Welcome Back</h2>
            <p className='text-slate-500'>Select your portal to securely access the system.</p>
          </div>

          {/* Portal List */}
          <div className='space-y-4'>
            {portalOptions.map((portal) => (
              <Link
                key={portal.to}
                to={portal.to}
                className="group flex items-center justify-between bg-slate-50 border border-slate-200 rounded-lg p-5 hover:border-indigo-400 hover:bg-indigo-50 transition-all"
              >
                <div>
                  <h3 className='text-lg text-slate-800 group-hover:text-indigo-600'>
                    {portal.title}
                  </h3>
                  <p className='text-sm text-slate-500'>
                    {portal.description}
                  </p>
                </div>

                <ArrowRightIcon className="w-5 h-5 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all"/>
              </Link>
            ))}
          </div>

          {/*  footer */}

          <div className='mt-12 text-center md:text-left text-sm text-slate-400'>
            <p>&copy; {new Date().getFullYear()}  HKabsuri.All rights reserved</p>
          </div>

        </div>

      </div>

    </div>
  )
}

export default LoginLoading
