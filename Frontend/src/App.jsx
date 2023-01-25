import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './Pages/landingPage/LandingPage'
import Login from './Pages/loginPage/Login'
import Signup from './Pages/Signup/Signup'
import SharedLayout from './Pages/SharedLayout/SharedLayout'
import DashboardProject from './components/DashboardItems/MainSections/DashboardProject'
import AddProject from './components/DashboardItems/MainSections/AddProject'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} /> 
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/home' element={<SharedLayout />}>
        
      </Route>
    </Routes>
  )
}

export default App