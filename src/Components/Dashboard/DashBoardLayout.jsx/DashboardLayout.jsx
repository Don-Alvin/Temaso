import React from 'react'
import SidePanel from './SidePanel'
import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  return (
    <main className='flex bg-white p-10'>
        <SidePanel />
        <section className='border bg-slate-100 rounded-lg w-full shadow'>
          <Outlet />
        </section>
        
    </main>
  )
}

export default DashboardLayout