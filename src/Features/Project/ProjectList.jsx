import React from 'react'
import Card from '../../ui/Card'
import { Link } from 'react-router-dom'
import { useProjects } from '../../hooks/useProjects'
import { BeatLoader } from 'react-spinners'
import { toast } from 'react-toastify'

const ProjectList = () => {

  const {isInitialLoading, error, isError, projects} = useProjects()

  let content;

  if (isInitialLoading) content = <BeatLoader color="#36d7b7" />

  if(isError) toast.error(error)

  content = projects?.map(project => (
          <div key={project.uid}>
            <Card>
              <h4 className='font-semibold p-2'>{project.name}</h4>
              <div className='h-[1px] w-full bg-gray-700'></div>
              <p className='text-sm p-2'>{project.description}</p>
              <div className='h-[1px] w-full bg-gray-700'></div>
              <span className='text-sm p-2'>Duration: {project.duration}</span>
              <span className='text-sm p-2'>Status: {project.isCompleted ? Completed : "In progress"}</span>
              <div className='h-[1px] w-full bg-gray-700'></div>
              <div className='flex'>
                <Link to={`/dashboard/${project.uid}`} className='p-2 font-semibold flex items-center gap-2 '>
                  <button className='border p-1 rounded text-white bg-teal-700'>Open</button>
                </Link>
                <Link to="editproject" className='p-2 font-semibold flex items-center gap-2 '>
                  <button className='border p-1 rounded text-white bg-orange-700'>Edit</button>
                </Link>
                <Link className='p-2 font-semibold flex items-center gap-2 '>
                  <button className='border p-1 rounded text-white bg-red-700'>Delete</button>
                </Link>
              </div>
            </Card>
          </div>
  ) )

  return (
    <section>
        {content}
    </section>
  )
}

export default ProjectList