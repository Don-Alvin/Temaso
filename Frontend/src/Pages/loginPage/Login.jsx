import React from 'react'
import { Link } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import Navbar from '../../Layouts/Navbar/Navbar'
import Footer from '../../Layouts/Footer/Footer'

const Login = () => {
  return (
      <>
        <Navbar />
        <div className='flex items-center justify-around m-10 mt-40'>
          <img src="../../public/images/logo-no-background.svg" alt="logo"  className='w-80'/>
          <div className="flex flex-col gap- items-center gap-8 border border-teal-900 rounded-lg p-10 shadow-md">
              <h2 className="text-teal-900 text-xl font-bold">Log in</h2>
              <Link  className='bg-white  border rounded shadow flex items-center gap-4 p-2 px-6'>
                  <FcGoogle />
                  <span className='text-slate-700'>Log in with Google</span>
              </Link>
              <form className="flex flex-col gap-6">
                      <div className='flex flex-col gap-2'>
                          <label className='text-slate-700' htmlFor="emai"> Email</label>
                          <input className='border-2 px-2 rounded outline-none' type="email" name='email' id='email' placeholder='Enter your email'/>
                      </div>
                      <div className="flex flex-col gap-2">
                          <label className='text-slate-700' htmlFor="password"> Password</label>
                          <input type="password" name="password" id="password" placeholder='Enter your password' className='border-2 px-2 rounded outline-none' />
                      </div>
                  <div className="flex gap-2">
                      <input type="checkbox" name="checkbox" id="checkbox" />
                      <label className='text-slate-700' htmlFor="checkbox">By clicking you agree to terms and conditions of our service.</label>
                  </div>
                  <Link to='/home' className='bg-teal-900 p-2 rounded flex items-center justify-center'>
                    <button type="submit" className='text-white'>Log in</button>
                  </Link>
                  <p className='text-slate-900'>You do not have an account yet? <Link to='/signup' className="text-teal-900">Sign up</Link></p>
              </form>
          </div>
        </div>
        <Footer />
      </>
  )
}

export default Login