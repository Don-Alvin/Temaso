import { NavLink } from 'react-router-dom'
import { GrProjects } from "react-icons/gr"
import { RiTeamFill } from "react-icons/ri"
import { MdOutlineManageAccounts } from "react-icons/md"

const SidePanel = () => {
  return (
    <section className='h-screen border-r w-[20%] p-4 flex flex-col items-center gap-3'>
        <NavLink 
            className="flex items-center gap-2 text-gray-700 font-medium text-xl p-2 hover:bg-teal-700 rounded w-[100%] hover:text-white focus:bg-teal-700 focus:text-white" 
            to='/dashboard'
        >
            <GrProjects className="w-[20px] h-[30px] text-gray-700 hover:text-white" />
            Projects
        </NavLink>
        {/* <NavLink 
            className="flex items-center gap-2 text-gray-700 font-medium text-xl p-2 hover:bg-teal-700 rounded w-[100%] hover:text-white focus:bg-teal-700 focus:text-white" 
            to='teams'
        >
            <RiTeamFill className="w-[20px] h-[30px] text-gray-700 hover:text-white" />
            Teams
        </NavLink> */}
        <NavLink 
            className="flex items-center gap-2 text-gray-700 font-medium text-xl p-2 hover:bg-teal-700 rounded w-[100%] hover:text-white focus:bg-teal-700 focus:text-white" 
            to='settings'
        >
            <MdOutlineManageAccounts className="w-[20px] h-[30px] text-gray-700 hover:text-white" />
            Profile settings
        </NavLink>
    </section>
  )
}

export default SidePanel