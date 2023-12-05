import { useState } from 'react'
import MetaData from '../../Components/Meta/MetaData'
import InputField from '../../ui/InputField'
import TextArea from '../../ui/TextArea'
import { useNavigate, useParams } from 'react-router-dom'
import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore'
import { toast } from 'react-toastify'
import Select from 'react-select'
import { useProjects } from '../../hooks/useProjects'
import useAuth from '../../hooks/useAuth'
import { db } from '../../apis/firebase'

const EditTaskForm = () => {
  const {projectId, taskName} = useParams()
  const navigate = useNavigate()

  const { projects } = useProjects()
  const { user } = useAuth()

  const userProjects = projects?.map(project => project.createdBy.id === user.uid ? project : null).filter(Boolean);
  const projectToEditArr = userProjects?.filter(userProject => userProject.uid === projectId)
  const project = projectToEditArr[0]
  const taskArr = project?.tasks?.filter(task => task.name === taskName)
  const task = taskArr[0]

  const options = [
    {value: "In progress", label:"In progress"},
    {value:"In review", label:"In review"},
    {value: "Completed", label:"Completed"},
    {value: "Not started", label:"Not started"}
  ]
  

  const [name, setName] = useState(task.name)
  const [deadline, setDeadline] = useState()
  const [description, setDescription] = useState(task.description)
  const [status, setStatus] = useState("")

  const editTask = async (e) => {
    e.preventDefault()
    const docRef = doc(db, 'projects', project.name)
    try {
      await updateDoc(docRef, {
        tasks: arrayUnion({
          name,
          deadline:Timestamp.fromDate(new Date(deadline)),
          description,
          status: status.value,
          assignedTo: task.assignedTo
        })
      })

      await updateDoc(docRef, {
        tasks: arrayRemove(task)
      })
      
      navigate(`dashboard/${projectId}/${task.name}`)
    } catch (error) {
      throw new Error("Editing failed")
      console.error(error);
      toast.error(error.message)
    }

  }

  return (
    <section className='w-full'>
      <MetaData title={`Edit ${task.name} `} />
      <header className='shadow w-full'>
        <h4 className='p-6 text-gray-700 text-lg font-medium'>Edit {task.name}</h4>
      </header>
      <article className='w-[70%] mx-auto'>
        <form className='p-6 text-gray-700 grid gap-4' onSubmit={editTask}>
          <InputField 
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name of the task"
          />
          <TextArea
             placeholder="Describe your task..."
             cols="30"
             rows="5"
             value={description}
             onChange={(e) => setDescription(e.target.value)}
          />
          <InputField
            label={'Set new deadline'}
            type="date"
            placeholder="Duration"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />
          <Select
             options={options}
             defaultValue={status}
             onChange={setStatus}
             isSearchable
             placeholder={'Set status'}
          />
          <button className='bg-[#00396B] text-white rounded p-2'>Edit task</button>
        </form>
      </article>
    </section>
  )
}

export default EditTaskForm