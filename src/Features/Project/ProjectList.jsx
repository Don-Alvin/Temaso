import React from 'react'
import Card from '../../ui/Card'
import { Link } from 'react-router-dom'
import { AiOutlineForm } from 'react-icons/ai'
import { useProjects } from '../../hooks/useProjects'
import { BeatLoader } from 'react-spinners'
import { toast } from 'react-toastify'

const ProjectList = () => {

  const {isInitialLoading, error, isError, projects} = useProjects()

  let content;

  if (isInitialLoading) content = <BeatLoader color="#36d7b7" />

  if(isError) toast.error(error)

  content = projects?.map(project => {})
  return (
    <section>
        <Card>
            <h4 className='font-semibold p-2'>Sherehe Connect</h4>
            <div className='h-[1px] w-full bg-gray-700'></div>
            <p className='text-sm p-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, suscipit.</p>
            <div className='h-[1px] w-full bg-gray-700'></div>
            <span className='text-sm p-2'>Deadline: 18th, December</span>
            <span className='text-sm p-2'>Status: In progress</span>
            <div className='h-[1px] w-full bg-gray-700'></div>
            <div className='flex'>
              <Link to=":projectId" className='p-2 font-semibold flex items-center gap-2 '>
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
    </section>
  )
}

export default ProjectList