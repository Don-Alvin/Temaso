import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const SidePanel = () => {
  return (
    <section className='h-screen border-r w-[20%] p-6 flex flex-col items-center gap-3'>
        <NavLink 
            className="text-gray-700 font-medium text-xl p-2 hover:bg-teal-700 rounded w-[100%] hover:text-white focus:bg-teal-700 focus:text-white" 
            to='/dashboard'
        >
            Projects
        </NavLink>
        {/* <NavLink 
            className="text-gray-700 font-medium text-xl p-2 hover:bg-teal-700 rounded w-[100%] hover:text-white focus:bg-teal-700 focus:text-white" 
            to='teams'
        >
            Teams
        </NavLink> */}
        <NavLink 
            className="text-gray-700 font-medium text-xl p-2 hover:bg-teal-700 rounded w-[100%] hover:text-white focus:bg-teal-700 focus:text-white" 
            to='settings'
        >
            Settings
        </NavLink>
    </section>
  )
}

export default SidePanel