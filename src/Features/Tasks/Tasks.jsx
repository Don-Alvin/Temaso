import React from 'react'
import MetaData from '../../Components/Meta/MetaData'
import { Link } from 'react-router-dom'
import { IoMdAdd } from 'react-icons/io'
import TaskList from './TaskList'

const Tasks = () => {
  return (
    <section className='text-gray-700 w-full'>
      <MetaData title={"Sherehe Connect"} />
      <header className='flex items-center justify-between w-full border-b p-4'>
        <h4 className='text-xl font-semibold'>Sherehe Connect</h4>
        <Link to="/dashboard/project/addtask" className='flex items-center gap-2 bg-teal-700 text-white p-2 rounded'>
          <IoMdAdd />
          <span>Assign a new task</span>
        </Link>
      </header>
      <article className='p-4'>
         <TaskList />
      </article>
    </section>
  )
}

export default Tasks