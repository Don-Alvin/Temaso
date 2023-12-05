import SidePanel from './SidePanel'
import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  return (
    <main className='flex bg-white p-4'>
        <SidePanel />
        <section className='border bg-slate-100 rounded-lg w-full shadow h-[95vh] overflow-y-scroll'>
          <Outlet />
        </section>
        
    </main>
  )
}

export default DashboardLayout