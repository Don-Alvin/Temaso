import React, { useState } from 'react'
import MetaData from '../../Components/Meta/MetaData'
import InputField from '../../ui/InputField'
import TextArea from '../../ui/TextArea'

const AddProjectForm = () => {
  const [name, setName] = useState("")
  const [duration, setDuration] = useState("")
  const [description, setDescription] = useState("")

  const addNewProject = (e) => {
    e.preventDefault()
  }

  return (
    <section className='w-full'>
      <MetaData title={"Add a new project"} />
      <header className='shadow w-full'>
        <h4 className='p-6 text-gray-700 text-lg font-medium'>Edit Sherehe Connect</h4>
      </header>
      <article className='w-[70%] mx-auto'>
        <form className='p-6 text-gray-700 grid gap-4' onSubmit={addNewProject}>
          <InputField 
            type="text"
            value={name}
            placeholder="Enter name of the project"
          />
          <TextArea
             placeholder="Describe your project..."
             cols="30"
             rows="5"
             value={description}
          />
          <InputField
            type="text"
            placeholder="Duration"
            value={duration}
          />
          <button className='bg-[#00396B] text-white rounded p-2'>Add</button>
        </form>
      </article>
    </section>
  )
}

export default AddProjectForm