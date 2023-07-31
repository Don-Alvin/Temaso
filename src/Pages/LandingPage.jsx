import React from 'react'
import MetaData from '../Components/Meta/MetaData'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <section className=' flex justify-center items-center relative h-screen bg-[url("/images/authBg.jpg")] bg-cover bg-center bg-no-repeat'>
      <MetaData title={'Manage all your projects - Temaso'} />
      <div className='absolute inset-0 bg-black opacity-70 z-10'></div>
      <div className="flex flex-col relative z-20 w-[90%]">
        <p className='text-white font-bold text-center text-3xl'>Manage all your projects with Temaso</p>
        <br></br>
        <Link to='/login' className='text-lg text-white text-center'>
          Login into your account
        </Link>
      </div>
    </section>
  )
}

export default LandingPage