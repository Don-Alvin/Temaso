import { Link } from 'react-router-dom'
import MetaData from '../Components/Meta/MetaData'

const ErrorPage = () => {
  return (
    <section className='w-full h-screen  flex items-center justify-center bg-white'>
      <MetaData title={'Page not found'} />
      <div>
        <p className='text-gray-700 font-bold'>
            Ooops we could not find the page you are looking for
        </p>
        <Link className='text-white font-bold' to ='/' >
            <button className='bg-teal-700 p-2 rounded'>
                Go to home
            </button>
        </Link>
      </div>
      
    </section>
  )
}

export default ErrorPage