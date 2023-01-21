import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './Pages/landingPage/LandingPage'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} /> 
    </Routes>
  )
}

export default App