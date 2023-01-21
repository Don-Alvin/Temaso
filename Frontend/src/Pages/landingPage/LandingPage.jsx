import React from 'react'
import Footer from '../../Layouts/Footer/Footer'
import Navbar from '../../Layouts/Navbar/Navbar'
import LandingHero from '../../components/LandingPageHero/LandingHero'
import Benefits from '../../components/Benefits/Benefits'

const LandingPage = () => {
  return (
    <>
        <Navbar />
        <LandingHero />
        <Benefits />
        <Footer />
    </>
  )
}

export default LandingPage