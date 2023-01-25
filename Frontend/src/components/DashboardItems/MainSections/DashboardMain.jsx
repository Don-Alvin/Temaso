import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DashboardProject from './DashboardProject'
import AddProject from './AddProject'

const DashboardMain = () => {
  return (
    <Routes>
      <Route path='/home' element={<DashboardProject />} />
      <Route path='/addproject' element={<AddProject />} />
    </Routes>
  )
}

export default DashboardMain