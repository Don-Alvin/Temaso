import { useState } from 'react'
import MetaData from '../../Components/Meta/MetaData'
import InputField from '../../ui/InputField'
import TextArea from '../../ui/TextArea'

const AddTaskForm = () => {
    const [name, setName] = useState("")
    const [deadline, setDeadline] = useState("")
    const [description, setDescription] = useState("")
    const [assignedUser, setAssignedUser] = useState("")

  const createTask = (e) => {
    e.preventDefault()
  }

  return (
    <section className='w-full'>
      <MetaData title={"Add a new project"} />
      <header className='shadow w-full'>
        <h4 className='p-6 text-gray-700 text-lg font-medium'>Create and assign project tasks</h4>
      </header>
      <article className='w-[70%] mx-auto'>
        <form className='p-6 text-gray-700 grid gap-4' onSubmit={createTask}>
          <InputField 
            type="text"
            value={name}
            placeholder="Enter name of task"
            onChange={(e) => setName(e.target.value)}
          />
          <TextArea
             placeholder="Describe the task"
             cols="30"
             rows="5"
             value={description}
             onChange={(e) => setDescription(e.target.value)}
          />
          <InputField
            type="date"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />

          <InputField 
            type="text"
            value={assignedUser}
            placeholder="Assign task to"
            onChange={(e) => setAssignedUser(e.target.value)}
          />
          <button className='bg-teal-700 text-white rounded p-2'>Add</button>
        </form>
      </article>
    </section>
  )
}

export default AddTaskForm