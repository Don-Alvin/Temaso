import React, { useState } from 'react'
import { addDoc, collection, doc, setDoc } from 'firebase/firestore'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

import MetaData from '../../Components/Meta/MetaData'
import InputField from '../../ui/InputField'
import TextArea from '../../ui/TextArea'
import useAuth from '../../hooks/useAuth'
import { db } from '../../apis/firebase'
import { nanoid } from 'nanoid'

const AddProjectForm = () => {
  const [name, setName] = useState("")
  const [duration, setDuration] = useState("")
  const [description, setDescription] = useState("")

  const { user } = useAuth()
  const navigate = useNavigate()

  const createdBy = {
    name: user.displayName,
    id: user.uid,
  }

  const addNewProject = async (e) => {
    e.preventDefault()
    try {
        await setDoc(doc(db, "projects", name), {
        uid: nanoid(),
        name,
        description,
        duration,
        createdBy,
        inProgress: true,
        isCompleted: false
      })
      navigate('/dashboard')
      toast.success("New project added")
      setName('')
      setDuration("")
      setDescription("")
    } catch (error) {
      toast.error(error.message)
      console.log(error.message);
    }
  }

  return (
    <section className='w-full'>
      <MetaData title={"Add a new project"} />
      <header className='shadow w-full'>
        <h4 className='p-6 text-gray-700 text-lg font-medium'>Add a new project</h4>
      </header>
      <article className='w-[70%] mx-auto'>
        <form className='p-6 text-gray-700 grid gap-4' onSubmit={addNewProject}>
          <InputField 
            type="text"
            value={name}
            placeholder="Enter name of the project"
            onChange={(e) => setName(e.target.value)}
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
          <button className='bg-teal-700 text-white rounded p-2'>Add</button>
        </form>
      </article>
    </section>
  )
}

export default AddProjectForm