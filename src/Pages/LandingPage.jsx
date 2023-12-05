import MetaData from '../Components/Meta/MetaData'
import Hero from '../Components/LandingPage/Hero'
import Features from '../Components/LandingPage/Features'
import Testimonials from '../Components/LandingPage/Testimonials'
import FAQ from '../Components/LandingPage/FAQ'
import Join from '../Components/LandingPage/Join'

const LandingPage = () => {
  return (
    <div className=''>
      <MetaData title={'Manage all your projects'} />
      <Hero />
      <Features />
      <hr className='h-[2px]' />
      <Testimonials />
      <hr className='h-[2px]' />
      <FAQ />
      <Join />
    </div>
  )
}

export default LandingPage