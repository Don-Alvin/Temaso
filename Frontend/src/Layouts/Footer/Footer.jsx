import React from 'react'
import { FiArrowRight } from 'react-icons/fi'

const Footer = () => {
  return (
    <>
      <div className="flex justify-evenly mb-8">
        <div className="flex flex-col gap-10">
          <img src="../../public/images/logo-no-background.svg" alt="logo" className='w-24'/>
          <p className="text-slate-700">Stay organized and productive with Proma.io</p>
          <form className='flex flex-col gap-8'>
            <label htmlFor="email" className='text-slate-700'>Subscribe to our newsletter</label>
            <input type="email" name="email" id="email" placeholder='Enter your email'/>
            <button type="submit" className='flex justify-center items-center gap-2 w-40 h-10 rounded bg-teal-900'>
              <span className='text-white'>Subscribe</span>
              <FiArrowRight  className='text-white'/>
            </button>
          </form>
        </div>
        <div className="flex justify-evenly gap-9 mt-10">
          <div className="flex flex-col gap-7">
            <h6 className='text-teal-900 font-semibold'>Features</h6>
            <ul className="flex flex-col gap-4">
              <li className='text-slate-700 '>Integrations</li>
              <li className='text-slate-700 '>Time Tracking</li>
              <li className='text-slate-700 '>Time Management</li>
              <li className='text-slate-700 '>Goal Module</li>
            </ul>
          </div>
          <div className="flex flex-col gap-7">
            <h6 className='text-teal-900 font-semibold'>Features</h6>
            <ul className="flex flex-col gap-4">
              <li className='text-slate-700 '>Privacy Policy</li>
              <li className='text-slate-700 '>Cookie Policy</li>
              <li className='text-slate-700 '>Terms and Conditions</li>
              <li className='text-slate-700 '>Blog</li>
            </ul>
          </div>
          <div className="flex flex-col gap-7">
            <h6 className='text-teal-900 font-semibold'>Features</h6>
            <ul className="flex flex-col gap-4">
              <li className='text-slate-700 '>Help Center</li>
              <li className='text-slate-700 '>Roadmap</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer