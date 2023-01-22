import React from 'react'
import { Link } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'

const Signup = () => {
  return (
    <div className='flex items-center justify-around m-10'>
        <img src="../../public/images/logo-no-background.svg" alt="logo"  className='w-80'/>
        <div className="flex flex-col gap- items-center gap-8 border border-teal-900 rounded-lg p-10 shadow-md">
            <h2 className="text-teal-900 text-xl font-bold">Create Account</h2>
            <Link  className='bg-white  border rounded shadow flex items-center gap-4 p-2 px-6'>
                <FcGoogle />
                <span className='text-slate-700'>Sign up with Google</span>
            </Link>
            <form className="flex flex-col gap-6">
                <div className="flex gap-6">
                    <div className='flex flex-col gap-2'>
                        <label className='text-slate-700' htmlFor="firstname"> First Name</label>
                        <input className='border-2 px-2 rounded outline-none' type="text" name='firstname' id='firstname' placeholder='Enter your first name' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='text-slate-700' htmlFor="secondame"> Second Name</label>
                        <input className='border-2 px-2 rounded outline-none' type="text" name='secondname' id='secondname' placeholder='Enter your second name'/>
                    </div>
                </div>
                <div className="flex gap-6">
                    <div className='flex flex-col gap-2'>
                        <label className='text-slate-700' htmlFor="emai"> Email</label>
                        <input className='border-2 px-2 rounded outline-none' type="email" name='email' id='email' placeholder='Enter your email'/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className='text-slate-700' htmlFor="dateofBirth">Date of Birth</label>
                        <input type="date" name="dateofBirth" id="dateOfBirth" className='border-2 px-2 rounded outline-none' />
                    </div>
                </div>
                <div className="flex gap-6">
                    <div className="flex flex-col gap-2">
                        <label className='text-slate-700' htmlFor="password"> Password</label>
                        <input type="password" name="password" id="password" placeholder='Enter your password' className='border-2 px-2 rounded outline-none' />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className='text-slate-700' htmlFor="confrim_password"> Confirm Password</label>
                        <input type="password" name="confirm_password" id="confirm_password" placeholder='Enter your password' className='border-2 px-2 rounded outline-none' />
                    </div>
                </div>
                <div className="flex gap-2">
                    <input type="checkbox" name="checkbox" id="checkbox" />
                    <label className='text-slate-700' htmlFor="checkbox">By clicking you agree to terms and conditions of our service.</label>
                </div>
                <button type="submit" className='text-white bg-teal-900 p-2 rounded'>Submit</button>
                <p className='text-slate-900'>Already have an account? <Link to='/login' className="text-teal-900">Login in</Link></p>
            </form>
        </div>
    </div>
  )
}

export default Signup