import React from 'react'
import { FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="px-20 py-5 bg-white fixed top-0 left-0 right-0 z-10">
      <nav className="flex justify-between items-center">
        <div className="logo">
          <img src="../../public/images/logo-no-background.svg" alt="logo" className='logo'/>
        </div>
        <div>
          <ul className="flex justify-around items-center gap-8">
            <li className="text-slate-700">
              <Link className=''>Home</Link>
            </li>
            <li className="text-slate-700">
              <Link>Dashboard</Link>
            </li>
            <li className="text-slate-700">
              <Link>Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="flex justify-around gap-8">
          <div className="btn bg-white flex justify-center items-center rounded w-20 h-8 border-teal-900 border">
            <Link to='/login' className='text-slate-700'>Log in</Link>
          </div>
          <div className="btn bg-teal-900 flex justify-center gap-2 items-center rounded w-40 h-8">
            <Link to='/signup' className='text-white'>Get Started</Link>
            <FiArrowRight className='text-white'/>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar