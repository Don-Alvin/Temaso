import { useState } from 'react'
import MetaData from '../../Components/Meta/MetaData'
import InputField from '../../ui/InputField'
import TextArea from '../../ui/TextArea'
import { useNavigate, useParams } from 'react-router-dom'
import { useProjects } from '../../hooks/useProjects'
import useAuth from '../../hooks/useAuth'
import { db } from '../../apis/firebase'
import { doc, updateDoc } from 'firebase/firestore'
import { toast } from 'react-toastify'
import Select from 'react-select'

const EditProjectForm = () => {
  const { projectId } = useParams()

  const { projects } = useProjects()
  const {user} = useAuth()
  const navigate = useNavigate()

  const userProjects = projects?.map(project => project.createdBy.id === user.uid ? project : null).filter(Boolean);
  const projectToEditArr = userProjects.filter(userProject => userProject.uid === projectId)
  const project = projectToEditArr[0]

  const options = [
    {value: "In progress", label:"In progress"},
    {value:"In review", label:"In review"},
    {value: "Completed", label:"Completed"},
    {value: "Not started", label:"Not started"}
  ]
  

  const [name, setName] = useState(project.name)
  const [duration, setDuration] = useState(project.duration)
  const [description, setDescription] = useState(project.description)
  const [status, setStatus] = useState(project.status)

  const editProject = async (e) => {
    e.preventDefault()
    const docRef = doc(db, 'projects', project.name)
    try {
      await updateDoc(docRef, {
        name,
        duration,
        description,
        status: status.value
      })
      navigate('/dashboard')
    } catch (error) {
      throw new Error("Editing failed")
      toast.error(error.message)
    }

  }

  return (
    <section className='w-full'>
      <MetaData title={`Edit ${project.name}`} />
      <header className='shadow w-full'>
        <h4 className='p-6 text-gray-700 text-lg font-medium'>Edit {project.name}</h4>
      </header>
      <article className='w-[70%] mx-auto'>
        <form className='p-6 text-gray-700 grid gap-4' onSubmit={editProject}>
          <InputField 
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name of the project"
          />
          <TextArea
             placeholder="Describe your project..."
             cols="30"
             rows="5"
             value={description}
             onChange={(e) => setDescription(e.target.value)}
          />
          <InputField
            type="text"
            placeholder="Duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
          <Select
             options={options}
             defaultValue={status}
             onChange={setStatus}
             isSearchable
             placeholder={'Set status'}
          />
          <button className='bg-[#00396B] text-white rounded p-2'>Edit project</button>
        </form>
      </article>
    </section>
  )
}

export default EditProjectForm