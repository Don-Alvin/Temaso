import { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoMdAdd } from 'react-icons/io'
import MetaData from '../../Components/Meta/MetaData'
import ProjectList from './ProjectList'
import Select from 'react-select'

const Projects = () => {

  const [status, setStatus] = useState("")
  
  const options = [
    {value: "In progress", label:"In progress"},
    {value:"In review", label:"In review"},
    {value: "Completed", label:"Completed"},
    {value: "Not started", label:"Not started"},
    {value: "All", label: "All"}
  ]

  return (
    <section className='text-gray-700 w-full'>
      <MetaData title={"Your projects"} />
      <header className='flex items-center justify-between w-full border-b p-4 shadow sticky top-0 z-10 bg-slate-100'>
        <h4 className='text-xl font-semibold'>Manage all your projects</h4>
        <Select 
          options={options}
          defaultValue={status}
          onChange={setStatus}
          isSearchable
          placeholder={'Filter with status'}
          classNames={{
            control: () => 'w-[200px]'
          }}
        />
        <Link to="addproject" className='flex items-center gap-2 bg-[#00396B] text-white p-2 rounded'>
          <IoMdAdd />
          <span>Add a new project</span>
        </Link>
      </header>
      <article className='p-4'>
         <ProjectList status = {status.value} />
      </article>
    </section>
  )
}

export default Projects