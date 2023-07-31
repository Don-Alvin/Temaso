import { Link, useNavigate } from 'react-router-dom'
import { BiSearchAlt2 } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'
import { AiOutlineMenu } from 'react-icons/ai'
import { GiCancel } from 'react-icons/gi'
import { useState } from 'react'
import useAuth from '../../hooks/useAuth'
import MenuModal from '../Modal/MenuModal'

const Header = () => {
    const [isAuthMenuOpen, setIsAuthMenuOpen] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const[isSearchOpen, setIsSearchOpen] = useState(false)

    const {user, setUser} = useAuth()
    const navigate = useNavigate();


    const handleAuthMenu = () => {
        setIsAuthMenuOpen(!isAuthMenuOpen)
    }

    const handleMobileMenu = () => {
        setIsMobileMenuOpen(true)
    }

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false)
    }

    const openMobileSearch = () => {
        setIsSearchOpen(true)
    }

    const closeMobileSearch = () => {
        setIsSearchOpen(false)
    }

    const handleLogout = () => {
        localStorage.removeItem("refreshToken");
        setAuth(null)
        handleAuthMenu()
        navigate('/')
      };

  return (
    <header className='p-4 px-4 md:px-8 lg:px-16 flex sticky top-0 left-0 w-full z-20 border-b shadow bg-white opacity-90'>
        <nav className='flex items-center justify-between w-full'>
            {/* Navbar menu Icon */}
            <AiOutlineMenu
                className='text-gray-700 text-xl md:hidden' 
                onClick={handleMobileMenu}
            />

            {/* Mobile menu */}
            {isMobileMenuOpen && (
            <div className="md:hidden absolute top-0 left-0 h-[100vh] w-[70%] bg-white z-40">
                <GiCancel 
                    className='text-gray-700 text-xl absolute top-8 left-[45%]'
                    onClick={closeMobileMenu}
                />
                {user ? (
                    <ul className='flex flex-col mt-20 gap-4 ml-6'>
                        <li className='px-2 text-gray-700 font-medium '>
                            <Link to='/' onClick={closeMobileMenu}>Home</Link>
                        </li>
                        <li className='px-2 text-gray-700 font-medium '>
                            <Link to='/popularregions' onClick={closeMobileMenu}>Popular regions</Link>
                        </li>
                        <li className='px-2 text-gray-700 font-medium '>
                            <Link to='/events' onClick={closeMobileMenu}>Upcoming events</Link>
                        </li>
                        <li className='px-2 text-gray-700 font-medium '>
                            <Link to='/createevent' onClick={closeMobileMenu}>Create event</Link>
                        </li>
                        <li className='px-2 text-gray-700 font-medium '>
                            <Link to='/createvenue' onClick={closeMobileMenu}>Create Venue</Link>
                        </li>
                        <li className='px-2 text-gray-700 font-medium '>
                            <Link  onClick={handleLogout}>Log out</Link>
                        </li>
                    </ul>
                ) : (
                    <ul className='flex flex-col mt-20 gap-4 ml-6'>
                        <li className='px-2 text-gray-700 font-medium '>
                            <Link to='/' onClick={closeMobileMenu}>Home</Link>
                        </li>
                        <li className='px-2 text-gray-700 font-medium '>
                            <Link to='/popularregions' onClick={closeMobileMenu}>Popular regions</Link>
                        </li>
                        <li className='px-2 text-gray-700 font-medium '>
                            <Link to='/events' onClick={closeMobileMenu}>Upcoming events</Link>
                        </li>
                        <li className='px-2 text-gray-700 font-medium '>
                            <Link to='/login' onClick={closeMobileMenu}>Log in</Link>
                        </li>
                        <li className='px-2 text-gray-700 font-medium '>
                            <Link to='/register' onClick={closeMobileMenu}>Register</Link>
                        </li> 
                    </ul>
                )} 
            </div>
            )}


            {/* backdrop  for small screens */}
            {isMobileMenuOpen && (
            <div 
                className='md:hidden absolute top-0 h-[100vh] w-full left-0 bg-black opacity-90 z-30'
                onClick={closeMobileMenu}
            >
            </div>
            )}

            <div className='flex md:gap-3 lg:gap-10'>
                <div className="">
                    <Link to='/'>
                        <img
                            className='h-[35px] md:h-[40px]'
                            src='/images/logo.png'
                            alt='logo'
                        />
                    </Link>
                </div>
            </div>

            <div className="hidden md:flex items-center gap-4">
                <div 
                    className='flex items-center gap-2 border p-1 rounded-2xl cursor-pointer'
                    onClick={handleAuthMenu}
                >
                    <AiOutlineMenu
                        className='text-gray-700 text-2xl hidden md:block' 
                    />
                    <CgProfile
                        className='text-xl md:text-3xl lg:text-4xl text-gray-700 cursor-pointer'
                    />
                </div>
            </div>

            {isAuthMenuOpen && ( 
                    <MenuModal handleAuthMenu={handleAuthMenu} handleLogout={handleLogout}/>              
                )}
        </nav>
    </header>
  )
}

export default Header