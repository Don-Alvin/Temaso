import React from 'react'
import { Link } from 'react-router-dom'
import {FiArrowRight} from 'react-icons/fi'

const LandingHero = () => {
  return (
     <div className="flex flex-col items-center gap-8 mt-40">
        <h1 className='text-teal-900 font-bold text-6xl text-center leading-relaxed'>Stop losing track <br></br>of your tasks</h1>
        <p className='text-center text-slate-700'>Proma.io lets you plan, track all your projects and tasks <br></br> in one simple view to help you be more productive</p>
        <Link className="flex gap-4 items-center bg-teal-900 h-10 rounded p-4">
            <span className="text-white">Start Planning and Tracking</span>
            <FiArrowRight className='text-white'/>
        </Link>
     </div>   
  )
}

export default LandingHero