import React from 'react'
import Card from '../../ui/Card'
import { Link } from 'react-router-dom'
import { AiOutlineForm } from 'react-icons/ai'
import { BeatLoader } from 'react-spinners'
import { toast } from 'react-toastify'

const TaskList = () => {

  return (
    <section>
        <Card>
            <h4 className='font-semibold p-2 text-center'>Create UI components</h4>
            <div className='h-[1px] w-full bg-gray-700'></div>
            <p className='text-sm p-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, suscipit.</p>
            <div className='h-[1px] w-full bg-gray-700'></div>
            <span className='text-sm p-2'>Assigned to: Alvin</span>
            <span className='text-sm p-2'>Deadline: 18th, December</span>
            <span className='text-sm p-2'>Status: In progress</span>
            <div className='h-[1px] w-full bg-gray-700'></div>
            <div className='flex'>
              <Link to="edittask" className='p-2 font-semibold flex items-center gap-2 '>
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

export default TaskList