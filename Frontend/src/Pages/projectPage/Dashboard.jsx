import React from 'react'
import HomeNavbar from '../../Layouts/Navbar/HomeNavbar'
import Footer from '../../Layouts/Footer/Footer'
import Menu from '../../components/Menu/Menu'

const Dashboard = () => {
  return (
    <>
        <HomeNavbar />
        <div className='py-10'>
          <Menu />
        </div>
        {/* <Footer /> */}
    </>
  )
}

export default Dashboard