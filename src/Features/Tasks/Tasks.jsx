import React from 'react'
import MetaData from '../../Components/Meta/MetaData'
import { Link, useParams } from 'react-router-dom'
import { IoMdAdd } from 'react-icons/io'
import TaskList from './TaskList'
import { useProjects } from '../../hooks/useProjects'

const Tasks = () => {

  const { projectId } = useParams()
  const { projects } = useProjects()

  const project = projects?.map(project => project.uid === projectId ? project : null).filter(Boolean)
  
  const renderedProject = project?.map(item => (
    <div key={item.uid}>
      <header className='flex items-center justify-between w-full border-b p-4'>
        <h4 className='text-xl font-semibold'>{item.name}</h4>
        <Link to="addtask" className='flex items-center gap-2 bg-teal-700 text-white p-2 rounded'>
          <IoMdAdd />
          <span>Assign a new task</span>
        </Link>
      </header>
      <article className='p-4'>
         {projects && <TaskList tasks={item.tasks} />}
      </article>
    </div>
  ))

  return (
    <section className='text-gray-700 w-full'>
      <MetaData title={"Sherehe Connect"} />
      {renderedProject}
    </section>
  )
}

export default Tasks