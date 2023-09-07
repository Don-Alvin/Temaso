import { toast } from 'react-toastify'
import { Timestamp, arrayUnion, doc, updateDoc } from 'firebase/firestore'
import { useNavigate, useParams } from 'react-router-dom'
import { useFormik } from 'formik'
import { db } from '../../apis/firebase'

import MetaData from '../../Components/Meta/MetaData'
import InputField from '../../ui/InputField'
import TextArea from '../../ui/TextArea'
import { useProjects } from '../../hooks/useProjects'
import { addTaskSchema } from './Schemas'

const AddTaskForm = () => {

    const navigate = useNavigate()

    const {projectId } = useParams()
    
    const { projects } = useProjects()
    const project = projects?.map(project => project.uid === projectId ? project : null).filter(Boolean)
    const item = project[0]

  const onSubmit = async () => {
    const docRef = doc(db, "projects", item.name )
    try {
        await updateDoc(docRef, {
          tasks: arrayUnion({
            name:values.name,
            description:values.description,
            deadline: Timestamp.fromDate(new Date(values.deadline)),
            assignedUser:values.assignedUser,
            inProgress: true,
            isCompleted: false
          })
        
      })
      toast.success("New task assigned")
      navigate(`/dashboard/${projectId}`)
      setName('')
      setDeadline("")
      setDescription("")
      setAssignedUser("")
    } catch (error) {
      toast.error(error.message)
    }
  }

  const {values, errors, handleBlur, handleChange, handleSubmit, touched, isSubmitting} = useFormik({
    initialValues: {
      name: "",
      description: "",
      deadline: "",
      assignedUser: ""
    },
    validationSchema: addTaskSchema,
    onSubmit
  }
  )

  return (
    <section className='w-full'>
      <MetaData title={"Add a new project"} />
      <header className='shadow w-full'>
        <h4 className='p-6 text-gray-700 text-lg font-medium'>Create and assign project tasks</h4>
      </header>
      <article className='w-[70%] mx-auto'>
        <form className='p-6 text-gray-700 grid gap-4' onSubmit={handleSubmit}>
          <InputField 
            type="text"
            placeholder="Enter name of task"
            className={errors.name && touched.name ? `outline outline-1 outline-red-700` : `outline-teal-700`}
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            id="name"
          />
          {errors.name && touched.name && <p className='text-red-700'>{errors.name}</p>}
          <TextArea
             placeholder="Describe the task"
             cols="30"
             rows="5"
             className={errors.description && touched.description ? `outline outline-1 outline-red-700` : `outline-teal-700`}
             value={values.description}
             onChange={handleChange}
             onBlur={handleBlur}
             id="description"
          />
          {errors.description && touched.description && <p className='text-red-700'>{errors.description}</p>}
          <InputField
            type="date"
            className={errors.date && touched.date ? `outline outline-1 outline-red-700` : `outline-teal-700`}
            value={values.deadline}
            onChange={handleChange}
            onBlur={handleBlur}
            id="deadline"
          />
          {errors.deadline && touched.deadline && <p className='text-red-700'>{errors.deadline}</p>}
          <InputField 
            type="text"
            placeholder="Assign task to"
            className={errors.assignedUser && touched.assignedUser ? `outline outline-1 outline-red-700` : `outline-teal-700`}
            value={values.assignedUser}
            onChange={handleChange}
            onBlur={handleBlur}
            id="assignedUser"
          />
          {errors.assignedUser && touched.assignedUser && <p className='text-red-700'>{errors.assignedUser}</p>}
          <button type='submit' disabled={isSubmitting} className='bg-teal-700 text-white rounded p-2'>Add</button>
        </form>
      </article>
    </section>
  )
}

export default AddTaskForm
