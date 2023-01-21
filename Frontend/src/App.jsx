import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './Pages/landingPage/LandingPage'
import Login from './Pages/loginPage/Login'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} /> 
      <Route path='/login' element={<Login />} />
    </Routes>
  )
}

export default App