import { NavLink, useNavigate } from 'react-router-dom'
import { MdOutlineManageAccounts } from "react-icons/md"
import useAuth from '../../../hooks/useAuth'
import { AiOutlineFileProtect, AiOutlineLogout } from 'react-icons/ai'
import { doc, updateDoc } from 'firebase/firestore'
import { auth, db } from '../../../apis/firebase'
import { signOut } from 'firebase/auth'
import { toast } from 'react-toastify'
import { CgProfile } from 'react-icons/cg'

const SidePanel = () => {
    const { user, setUser } = useAuth()
    const navigate = useNavigate()

    const logOut = async () => {
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
           toast.error(error.message) 
        }
    }
  return (
    <section className='bg-gray-100 h-[90vh] w-[30%] py-4 mr-4 px-2 flex flex-col gap-6 border shadow rounded-lg'>
        <header>
            <div 
              className='flex items-center gap-2 p-1 rounded-lg cursor-pointer'
            >
                {user ? 
                    user.photoURL ? <img className="w-[50px] h-[50px] object-cover rounded-full" src={user.photoURL} alt={user.displayName} /> : <CgProfile className='text-gray-700 text-xl font-semibold' /> 
                        : (
                            <CgProfile
                                className={`text-gray-700 ${user ? `text-xl` : `text-3xl`}  font-semibold`}
                            /> 
                        )
                    }
                {user && <p className='text-gray-700 font-semibold'>Hey, {user.displayName}</p>}
            </div>
        </header>
        <div className='w-full flex flex-col gap-8'>
            <NavLink 
                className="flex items-center gap-2 font-semibold text-xl p-2 hover:bg-[#00396B] w-[100%] hover:text-white focus:bg-[#00396B] focus:text-white" 
                to='/dashboard'
            >
                <AiOutlineFileProtect className="w-8 h-8 text-gray-700 hover:text-white" />
                <span className='text-gray-700 hover:text-white'>Projects</span>
            </NavLink>
            {/* <NavLink 
                className="flex items-center gap-2 text-gray-700 font-medium text-xl p-2 hover:bg-[#00396B] rounded w-[100%] hover:text-white focus:bg-[#00396B] focus:text-white" 
                to='teams'
            >
                <RiTeamFill className="w-[20px] h-[30px] text-gray-700 hover:text-white" />
                Teams
            </NavLink> */}
            <NavLink 
                className="flex items-center gap-2 text-gray-700 font-semibold text-xl p-2 hover:bg-[#00396B] w-[100%] hover:text-white focus:bg-[#00396B] focus:text-white" 
                to='settings'
            >
                <MdOutlineManageAccounts className="w-8 h-8 text-gray-700 hover:text-white" />
                Profile settings
            </NavLink>
        </div>
        <div className='p-2 flex items-center gap-2'>
            <AiOutlineLogout onClick={logOut} className='w-8 h-8 text-gray-700 hover:text-white cursor-pointer' />
            <span className='text-gray-700 font-semibold text-xl'>Log out</span>
        </div>
        
        
    </section>
  )
}

export default SidePanel