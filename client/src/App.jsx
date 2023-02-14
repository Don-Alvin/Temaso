import React, { useState } from 'react'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'


// Layouts
import DashboardLayout from './Layouts/DashboardLayout'

// Pages
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Profile from './pages/Dashboard/Profile'
import Dashboard from './pages/Dashboard/Dashboard'
import Team from './pages/Dashboard/Team'
import CreateTask from './pages/Dashboard/CreateTask'
import TeamLayout from './Layouts/TeamLayout'
import AddTeamMember from './components/AddTeamMember'
import EditProfile from './components/EditProfile'
import ProfileLayout from './Layouts/ProfileLayout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<LandingPage />} />
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Signup />} />
      <Route path='dashboard' element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path='profile' element={<ProfileLayout />}>
          <Route  index element={<Profile />} />
          <Route path='edit-profile' element={<EditProfile />} />
        </Route>
        <Route path='create' element={<CreateTask/>} />
        <Route path='team' element={<TeamLayout />}>
          <Route index element={<Team />} />
          <Route path='addteammember' element={<AddTeamMember />} />
        </Route>
      </Route>
    </>  
  )
)

const App = () => {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
