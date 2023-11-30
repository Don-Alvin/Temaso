import React, { useState } from 'react'
import Card from '../../ui/Card'
import { Link } from 'react-router-dom'
import { useProjects } from '../../hooks/useProjects'
import useAuth from '../../hooks/useAuth'
import { BeatLoader } from 'react-spinners'
import { toast } from 'react-toastify'
import { IoMdAdd } from 'react-icons/io'
import useDeleteProject from '../../hooks/useDeleteProject'

const ProjectList = () => {

  const {user} = useAuth()
  const { deleteProject } = useDeleteProject()

  const {isInitialLoading, error, isError, projects} = useProjects()

  const userProjects = projects?.map(project => project.createdBy.id === user.uid ? project : null).filter(Boolean);
 
  let content;

  if (isInitialLoading) content = <BeatLoader color="#36d7b7" />

  if(isError) toast.error(error)


  content = userProjects?.map(project => (
          <div key={project.uid}>
            <Card>
              <h4 className='font-semibold p-2'>{project.name}</h4>
              <div className='h-[1px] w-full bg-gray-700'></div>
              <p className='text-sm p-2'>{project.description}</p>
              <div className='h-[1px] w-full bg-gray-700'></div>
              <span className='text-sm p-2'>Duration: {project.duration}</span>
              <span className='text-sm p-2'>{project.status ? project.status : null }</span>
              <div className='h-[1px] w-full bg-gray-700'></div>
              <div className='flex items-center gap-2 p-2'>
                <Link to={`/dashboard/${project.uid}`} className='bg-[#00396B] flex items-center justify-center rounded w-16 h-8 p-2 font-semibold flex items-center gap-2 '>
                  <button className='text-white'>Open</button>
                </Link>
                <Link to={`/dashboard/${project.uid}/edit`} className='flex items-center justify-center rounded w-16 h-8 bg-orange-700 font-semibold flex items-center gap-2 '>
                  <button className='text-white '>Edit</button>
                </Link>
                <Link 
                  className='bg-red-700 flex items-center justify-center rounded w-16 h-8 p-2 font-semibold flex items-center gap-2'
                  onClick={() => deleteProject(project.name)}
                >
                  <p className='text-white'>Delete</p>
                </Link>
              </div>
            </Card>
          </div>
  ) )

  return (
    <section className='w-full flex gap-3 flex-wrap'>
        {userProjects ? (
          content
        ) : (
          <div className='flex flex-col w-[50%] items-center gap-8'>
            <p className='text-xl font-medium'>You have not added any projects yet</p>
            <Link to="addproject" className='flex items-center gap-2 bg-[#00396B] text-white p-2 rounded'>
              <IoMdAdd />
              <span>Add a new project</span>
            </Link>
          </div>
        )}
        
    </section>
  )
}

export default ProjectList