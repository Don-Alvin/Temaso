import React from 'react'
import MetaData from '../../Components/Meta/MetaData'
import { Link, useParams } from 'react-router-dom'
import { IoMdAdd } from 'react-icons/io'
import TaskList from './TaskList'
import { useProjects } from '../../hooks/useProjects'
import useAuth from '../../hooks/useAuth'
import { db } from '../../apis/firebase'
import { arrayRemove, doc, updateDoc } from 'firebase/firestore'

const Tasks = () => {

  const { user } = useAuth()

  const { projectId } = useParams()
  const { projects } = useProjects()
  const userProjects = projects?.map(project => project.createdBy.id === user.uid ? project : null).filter(Boolean);
  const project = userProjects?.map(project => project.uid === projectId ? project : null).filter(Boolean)

  const deleteTask = async (task) => {
    const projectRef = doc(db, "projects", project[0].name)
    try {
      await updateDoc(projectRef, {
        tasks: arrayRemove(task)
      })
    } catch (error) {
      console.error(error)
      console.log(error.message);
      throw new Error("Could not delete task")
    }
  }
  
  const renderedProject = project?.map(item => (
    <div key={item.uid}>
      <header className='flex items-center justify-between w-full border-b p-4'>
        <h4 className='text-xl font-semibold'>{item.name}</h4>
        <Link to="addtask" className='flex items-center gap-2 bg-[#00396B] text-white p-2 rounded'>
          <IoMdAdd />
          <span>Assign a new task</span>
        </Link>
      </header>
      <article className='p-4'>
         {projects && <TaskList tasks={item.tasks} deleteTask={deleteTask} />}
      </article>
    </div>
  ))

  return (
    <section className='text-gray-700 w-full'>
      <MetaData title={'Tasks'} />
      {renderedProject}
    </section>
  )
}

export default Tasks