import React from 'react'
import SidePanel from './SidePanel'
import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  return (
    <main className='flex'>
        <SidePanel />
        <Outlet />
    </main>
  )
}

export default DashboardLayout