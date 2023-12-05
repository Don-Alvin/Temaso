import { Link } from 'react-router-dom'

const Testimonials = () => {
  return (
    <section className="bg-gray-200 text-gray-700 py-10 px-16 flex flex-col gap-4 items-center">
      <div className="flex flex-col items-center gap-2">
        <h4 className="font-bold text-3xl">What our users say</h4>
        <span>Hear from our satisfied users</span>
      </div>
      <div className="flex flex-wrap gap-6 justify-center">
        <Link className="w-[90%] md:w-[40%] border border-solid border-gray-300 rounded-lg shadow flex items-center gap-4 p-4 bg-gray-100 hover:bg-white">
          <img src='/images/woman.jpg' className='w-16 h-16 object-cover rounded-full' alt='profile' />
          <div className='flex flex-col gap-3'>
            <p className='text-lg'>Temaso has revolutionised the way we manage our projects</p>
            <h6 className='text-sm'>JOHN DOE, <span className='font-semibold'>Project Manager</span></h6>
          </div>
        </Link>
        <Link className="w-[90%] md:w-[40%] border border-solid border-gray-300 rounded-lg shadow flex items-center gap-4 p-4 bg-gray-100 hover:bg-white">
            <img src='/images/woman.jpg' className='w-16 h-16 object-cover rounded-full' alt='profile' />
            <div className='flex flex-col gap-3'>
              <p className='text-lg'>Temaso has revolutionised the way we manage our projects</p>
              <h6 className='text-sm'>JOHN DOE, <span className='font-semibold'>Project Manager</span></h6>
          </div>
          </Link>
        <Link className="w-[90%] md:w-[40%] border border-solid border-gray-300 rounded-lg shadow flex items-center gap-4 p-4 bg-gray-100 hover:bg-white">
          <img src='/images/man2.jpg' className='w-16 h-16 object-cover rounded-full' alt='profile' />
          <div className='flex flex-col gap-3'>
            <p className='text-lg'>Temaso has revolutionised the way we manage our projects</p>
            <h6 className='text-sm'>JOHN DOE, <span className='font-semibold'>Project Manager</span></h6>
          </div>
        </Link>
        <Link className="w-[90%] md:w-[40%] border border-solid border-gray-300 rounded-lg shadow flex  items-centergap-4 p-4 bg-gray-100 hover:bg-white">
          <img src='/images/woman2.jpg' className='w-16 h-16 object-cover rounded-full' alt='profile' />
          <div className='flex flex-col gap-3'>
            <p className='text-lg'>Temaso has revolutionised the way we manage our projects</p>
            <h6 className='text-sm'>JOHN DOE, <span className='font-semibold'>Project Manager</span></h6>
          </div>
        </Link>
        <Link className="w-[90%] md:w-[40%] border border-solid border-gray-300 rounded-lg shadow flex items-center gap-4 p-4 bg-gray-100 hover:bg-white">
          <img src='/images/man3.jpg' className='w-16 h-16 object-cover rounded-full' alt='profile' />
          <div className='flex flex-col gap-3'>
            <p className='text-lg'>Temaso has revolutionised the way we manage our projects</p>
            <h6 className='text-sm'>JOHN DOE, <span className='font-semibold'>Project Manager</span></h6>
          </div>
        </Link>
      </div>
    </section>
  )
}

export default Testimonials