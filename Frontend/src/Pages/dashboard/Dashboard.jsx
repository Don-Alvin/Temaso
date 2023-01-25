import React from 'react'
import HomeNavbar from '../../Layouts/Navbar/HomeNavbar'
import DashboardItems from '../../components/DashboardItems/DashboardItems'
import { Route, Routes } from 'react-router-dom'

const Dashboard = () => {
  return (
    <>
        <HomeNavbar />
        <DashboardItems />
    </>
  )
}

export default Dashboard