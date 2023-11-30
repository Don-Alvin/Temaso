import { Link, useNavigate } from 'react-router-dom'
import { CgProfile } from 'react-icons/cg'
import { AiOutlineMenu } from 'react-icons/ai'
import { GiCancel } from 'react-icons/gi'
import { useState } from 'react'
import MenuModal from '../Modal/MenuModal'
import { signOut } from 'firebase/auth'
import { auth, db } from '../../apis/firebase'
import useAuth from '../../hooks/useAuth'
import { toast } from 'react-toastify'
import { doc, updateDoc } from 'firebase/firestore'

const Header = () => {
    const [isAuthMenuOpen, setIsAuthMenuOpen] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const[isSearchOpen, setIsSearchOpen] = useState(false)

    const navigate = useNavigate();

    const {user, setUser } = useAuth()

    const handleAuthMenu = () => {
        setIsAuthMenuOpen(!isAuthMenuOpen)
    }

    // const handleMobileMenu = () => {
    //     setIsMobileMenuOpen(true)
    // }

    // const closeMobileMenu = () => {
    //     setIsMobileMenuOpen(false)
    // }

    // const openMobileSearch = () => {
    //     setIsSearchOpen(true)
    // }

    // const closeMobileSearch = () => {
    //     setIsSearchOpen(false)
    // }

    const handleLogout = async () => {
        handleAuthMenu()
        const docRef = doc(db, "users", user.uid)
        try {
           await updateDoc(docRef, {
            online: false,
          })
            signOut(auth)
            setUser(null)
            navigate('/') 
        } catch (error) {
           throw new Error("Logout failed")
           toast.error("error.message") 
        }
        
      };

  return (
    <header className='p-4 px-4 md:px-8 lg:px-16 flex fixed top-0 left-0 w-full z-20'>
        <nav className='flex items-center justify-between w-full'>
            <div className='flex md:gap-3 lg:gap-10'>
                <div className="">
                    <Link to='/' className='flex items-center gap-4'>
                        <img
                            className='h-[35px] md:h-[40px]'
                            src='/images/logo.png'
                            alt='logo'
                        />
                        <span className='text-white font-bold text-xl'>Temaso</span>
                    </Link>
                </div>
            </div>

            <div>
                <ul className='flex gap-8 text-white font-semibold'>
                    <li className='hover:bg-gray-50 hover:bg-opacity-10 p-2 rounded'>
                        <Link>Home</Link>
                    </li>
                    <li className='hover:bg-gray-50 hover:bg-opacity-10 p-2 rounded'>
                        <Link>Blog</Link>
                    </li>
                    <li className='hover:bg-gray-50 hover:bg-opacity-10 p-2 rounded'>
                        <Link>Support</Link>
                    </li>
                    <li className='hover:bg-gray-50 hover:bg-opacity-10 p-2 rounded'>
                        <Link>Features</Link>
                    </li>
                </ul>
            </div>

            <div className="flex items-center gap-4">
                {user && <Link to="dashboard" className='text-white border rounded p-1 bg-[#00396B]'>Dashboard</Link>}
                <div 
                    className='flex items-center gap-2 border p-1 rounded cursor-pointer'
                    onClick={handleAuthMenu}
                >
                    {user ? 
                         user.photoURL ? <img className="w-[30px] h-[30px] object-cover rounded-full" src={user.photoURL} alt={user.displayName} /> : <CgProfile className='text-gray-700 text-xl font-semibold' /> 
                         : (
                                <CgProfile
                                    className={`text-gray-700 ${user ? `text-xl` : `text-3xl`}  font-semibold`}
                                /> 
                            )
                    }

                    {user && <p className='text-gray-700 font-semibold'>Hey, {user.displayName}</p>}

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