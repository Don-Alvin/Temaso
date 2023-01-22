import React from 'react'
import HomeNavbar from '../../Layouts/Navbar/HomeNavbar'
import Menu from '../../components/Menu/Menu'
import DashboardItems from '../../components/DashboardItems/DashboardItems'

const Dashboard = () => {
  return (
    <>
        <HomeNavbar />
        <div className='mt-22 flex bg-teal-900'>
          <Menu />
          <DashboardItems />
        </div>
    </>
  )
}

export default Dashboard