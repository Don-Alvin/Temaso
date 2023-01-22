import React from 'react'
import { MdOutlineNotificationsNone } from 'react-icons/md'
import { Link } from 'react-router-dom'

const HomeNavbar = () => {
  return (
    <div className="px-20 py-5 bg-white fixed top-0 left-0 right-0 z-10 border-b border-teal-900">
      <nav className="flex justify-between items-center">
        <div className="logo">
          <img src="../../public/images/logo-no-background.svg" alt="logo" className='logo'/>
        </div>
        <div>
          <ul className="flex justify-around items-center gap-8">
          <li className="text-slate-700">
              <Link>Dashboard</Link>
            </li>
            <li className="text-slate-700">
              <Link className=''>About</Link>
            </li>
            <li className="text-slate-700">
              <Link>Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-8 items-center justify-center">
          <MdOutlineNotificationsNone className='text-teal-900 text-4xl'/>
          <img src="public/images/profile.jpg" alt="" className="w-10 h-10 rounded-full"/>
        </div>
      </nav>
    </div>
  )
}

export default HomeNavbar