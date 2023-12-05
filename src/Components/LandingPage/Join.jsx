import React from 'react'
import { Link } from 'react-router-dom'

const Join = () => {
  return (
    <section className='flex items-center py-10 justify-center bg-[url("/images/heroBg.jpg")] relative bg-cover bg-center bg-no-repeat text-white'>
      <div className='absolute inset-0 bg-[#00396B] opacity-60 z-10'></div>
      <div className='flex flex-col items-center gap-6 rounded-lg w-[60%] relative z-20 py-20 px-10 border border-white'>
        <div className='flex flex-col items-center gap-3'>
          <h5 className='text-3xl font-bold'>Ready to get started?</h5>
          <p className='font-semibold text-xl'>Join us today and take control of your projects</p>
        </div>
        <Link to='/register' className='btn btn-outline'>Register Now</Link>
      </div>
    </section>
  )
}

export default Join