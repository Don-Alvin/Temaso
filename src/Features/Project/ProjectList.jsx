import React from 'react'
import Card from '../../ui/Card'
import { Link } from 'react-router-dom'
import { AiOutlineForm } from 'react-icons/ai'

const ProjectList = () => {
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
            <Link className='p-2 font-semibold flex items-center gap-2 '>
              Edit
              <AiOutlineForm className='text-lg'/>
            </Link>
        </Card>
    </section>
  )
}

export default ProjectList