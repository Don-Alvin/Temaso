import { AiFillGithub, AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai'

const Footer = () => {
    const date = new Date().getFullYear()
  return (
    <footer className='bg-[#00396B] py-10 px-10 flex flex-col items-center lg:items-center gap-4 text-white'>
        <div className='flex w-full justify-between py-8'>
            <div className='flex flex-col gap-2'>
                <img className='w-5' src='/images/logofooter.png' alt='logo' />
                <span>All rights reserved</span>
            </div>
            <div className='flex gap-16 items-start'>
                <div className='flex flex-col gap-3'>
                    <h5 className='text-xl font-bold'>Company</h5>
                    <ul>
                        <li>About</li>
                        <li>Leadership</li>
                        <li>Blog</li>
                        <li>Careers</li>
                    </ul>
                </div>
                <div className='flex flex-col gap-3'>
                    <h5 className='text-xl font-bold'>Products</h5>
                    <ul>
                        <li>Products Overview</li>
                        <li>Data Parsing</li>
                        <li>Managed Bot</li>
                        <li>Spaces</li>
                    </ul>
                </div>
                <div className='flex flex-col gap-3'>
                    <h5 className='text-xl font-bold'>Community</h5>
                    <ul>
                        <li>Tutorials</li>
                        <li>Meetups</li>
                        <li>Q&A</li>
                    </ul>
                </div>
            </div>
            <div className='flex gap-3'>
                <AiFillTwitterSquare className='w-8 h-8' />
                <AiFillGithub className='w-8 h-8' />
                <AiFillLinkedin className='w-8 h-8' />
            </div>
        </div>
        <div className='h-[1px] w-full bg-white'></div>
        <div className='flex gap-2'>
            <span>hi@temaso.com</span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
        </div> 
    </footer>
  )
}

export default Footer