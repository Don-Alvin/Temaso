import { useState } from 'react'
import MetaData from '../../Components/Meta/MetaData'
import InputField from '../../ui/InputField'
import TextArea from '../../ui/TextArea'
import useAuth from '../../hooks/useAuth'
import { toast } from 'react-toastify'
import { Timestamp, arrayUnion, doc, updateDoc } from 'firebase/firestore'
import { db } from '../../apis/firebase'
import { useNavigate, useParams } from 'react-router-dom'
import { useProjects } from '../../hooks/useProjects'

const AddTaskForm = () => {
    const [name, setName] = useState("")
    const [deadline, setDeadline] = useState("")
    const [description, setDescription] = useState("")
    const [assignedUser, setAssignedUser] = useState("")

    const navigate = useNavigate()

    const {projectId } = useParams()
    
    const { projects } = useProjects()
    const project = projects?.map(project => project.uid === projectId ? project : null).filter(Boolean)
    const item = project[0]

  const createTask = async (e) => {
    e.preventDefault()
    const docRef = doc(db, "projects", item.name )
    try {
        await updateDoc(docRef, {
          tasks: arrayUnion({
            name,
            description,
            deadline: Timestamp.fromDate(new Date(deadline)),
            assignedUser,
            inProgress: true,
            isCompleted: false
          })
        
      })
      toast.success("New task assigned")
      navigate("/dashboard/project")
      setName('')
      setDeadline("")
      setDescription("")
      setAssignedUser("")
    } catch (error) {
      toast.error(error.message)
      console.log(error);
    }
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