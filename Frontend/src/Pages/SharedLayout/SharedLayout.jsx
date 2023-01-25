import React from 'react'
import { Outlet } from 'react-router-dom'
import DashboardItems from '../../components/DashboardItems/DashboardItems'
import HomeNavbar from '../../Layouts/Navbar/HomeNavbar'

const SharedLayout = () => {
  return (
    <>
        <HomeNavbar />
        <DashboardItems />
        <Outlet />
    </>
  )
}

export default SharedLayout