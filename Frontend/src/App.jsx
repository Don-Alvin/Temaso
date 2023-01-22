import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './Pages/landingPage/LandingPage'
import Login from './Pages/loginPage/Login'
import Signup from './Pages/Signup/Signup'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} /> 
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
    </Routes>
  )
}

export default App