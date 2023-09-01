import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdAdd } from 'react-icons/io'
import MetaData from '../../Components/Meta/MetaData'
import ProjectList from './ProjectList'

const Projects = () => {
  return (
    <section className='text-gray-700 w-full'>
      <MetaData title={"Your projects"} />
      <header className='flex items-center justify-between w-full border-b p-4 shadow'>
        <h4 className='text-xl font-medium'>Manage all your projects</h4>
        <Link to="addproject" className='flex items-center gap-2 bg-teal-700 text-white p-2 rounded'>
          <IoMdAdd />
          <span>Add a new project</span>
        </Link>
      </header>
      <article className='p-4'>
         <ProjectList />
      </article>
    </section>
  )
}

export default Projects