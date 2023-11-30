import React from 'react'

const Hero = () => {
  return (
    <section className=' flex justify-center items-center relative h-screen bg-[url("/images/hero2Bg.jpg")] bg-cover bg-center bg-no-repeat'>
      <div className='absolute inset-0 bg-[#00396B] opacity-20 z-10'></div>
      <div className="relative z-20 w-[90%] text-white flex flex-col items-center gap-6">
        <h4 className='text-white font-extrabold text-center text-5xl'>Welcome to Temaso</h4>
        <p className='font-bold text-2xl text-center'>Supercharge your project <br/> management skills!</p>
        <div className='flex flex-col items-center gap-4'>
            <button className='btn btn-outline shadow'>Get started now</button>
            <p className='font-semibold text-xl'>Start your free trial today!</p>
        </div>
      </div>
    </section>
  )
}

export default Hero