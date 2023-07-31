import React from 'react'
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai'

const Footer = () => {
    const date = new Date().getFullYear()
  return (
    <footer className='bg-teal-700 p-5 flex flex-col items-center gap-4'>
        <div className='flex gap-4 justify-center items-center'>
            <a href='#'>
                <AiFillFacebook className='text-white text-3xl' />
            </a>
            <a href='#'>
                <AiFillInstagram className='text-white text-3xl' />
            </a>
        </div>
        <span className='text-white text-xl text-center'>
            &copy; Temaso. <br></br> All Rights Reserved. {date}
        </span>
    </footer>
  )
}

export default Footer