import { TbMessageCircleQuestion } from "react-icons/tb"
import { Link } from 'react-router-dom'

const FAQ = () => {
  return (
    <section className="bg-gray-200 text-gray-700 py-10 px-16 flex flex-col gap-6 items-center">
      <div className="flex flex-col items-center gap-2">
        <h4 className="font-bold text-3xl">Frequently asked questions</h4>
        <span>You have question? We have answers.</span>
      </div>
      <div className="flex flex-wrap gap-6 justify-center">
        <Link className=" w-[90%] md:w-[40%] border border-solid border-gray-300 rounded-lg shadow flex gap-4 p-4 bg-gray-100 hover:bg-white">
          <TbMessageCircleQuestion className='text-3xl text-blue-500' />
          <div className='flex flex-col gap-4'>
            <p className='text-blue-600 font-semibold text-2xl'>How do I create a project?</p>
            <p>You can create a project by navigating the dashboard and clicking create a new project.</p>
          </div>
        </Link>
        <Link className=" w-[90%] md:w-[40%] border border-solid border-gray-300 rounded-lg shadow flex gap-4 p-4 bg-gray-100 hover:bg-white">
          <TbMessageCircleQuestion className='text-3xl text-blue-500' />
          <div className='flex flex-col gap-4'>
            <p className='text-blue-600 font-semibold text-2xl'>How do I create a new task?</p>
            <p>You can create a new task by navigating the dashboard, opening a project and clicking create a new task.</p>
          </div>
        </Link>
      </div>
      <button className='border border-solid border-blue-500 p-2 rounded hover:bg-white'>See all FAQs</button>
    </section>
  )
}

export default FAQ