import React from 'react'
import { RxDashboard } from 'react-icons/rx'
import { AiOutlinePlus } from 'react-icons/ai'
import { GoProject } from 'react-icons/go'
import { BsFillPeopleFill } from 'react-icons/bs'
import { FaTasks } from 'react-icons/fa'
import { FiLogOut } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Menu = () => {
    const date = new Date().getFullYear()
  return (
    <div className='flex flex-col justify-between px-10 gap-8 pt-24 pb-20 h-screen border-r border-zinc-50'>
        <div className='flex flex-col gap-8'>
            <img src="public/images/logo-white.png" alt="logo" className='w-12' />
            <Link to='/addproject' className='bg-zinc-50 flex items-center justify-center gap-3 p-2 rounded-md w-40'>
                <span className="text-slate-900">Add Project</span>
                <AiOutlinePlus className='text-teal-900 font-extrabold text-xl'/>
            </Link>
            <div className="flex flex-col gap-10">
              <Link className='flex gap-2 items-center'>
                <RxDashboard className='text-zinc-50'/>
                <span className="text-zinc-50">Dashboard</span>
              </Link>
              <Link className='flex gap-2 items-center'>
                <GoProject className='text-zinc-50'/>
                <span className="text-zinc-50">Projects</span>
              </Link>
              <Link className='flex gap-2 items-center'>
                <BsFillPeopleFill className='text-zinc-50'/>
                <span className="text-zinc-50">Team Members</span>
              </Link>
              <Link className='flex gap-2 items-center'>
                <FaTasks className='text-zinc-50'/>
                <span className="text-zinc-50">My Tasks</span>
              </Link>
            </div>
        </div>
        <Link className='justify-self-end bg-zinc-50 flex items-center justify-center gap-3 p-2 rounded-md w-40'>
            <span className='text-slate-900'>Log out</span>
            <FiLogOut className='text-teal-900 font-extrabold text-xl'/>
        </Link>
        <span className="text-zinc-50 text-sm">&copy;{date} Proma. <br></br>All rights reserved</span>
    </div>
  )
}

export default Menu