import { doc, setDoc } from 'firebase/firestore'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { nanoid } from 'nanoid'
import { useFormik } from 'formik'

import MetaData from '../../Components/Meta/MetaData'
import InputField from '../../ui/InputField'
import TextArea from '../../ui/TextArea'
import useAuth from '../../hooks/useAuth'
import { db } from '../../apis/firebase'
import { addProjectSchema } from './Schemas'
import Select from 'react-select'

const AddProjectForm = () => {

  const { user } = useAuth()
  const navigate = useNavigate()

  const createdBy = {
    name: user.displayName,
    id: user.uid,
  }

  const onSubmit = async () => {
    try {
        await setDoc(doc(db, "projects", values.name), {
        uid: nanoid(),
        name:values.name,
        description: values.description,
        duration: values.duration,
        status: values.status,
        createdBy,
      })
      toast.success("New project added")
      navigate('/dashboard')
    } catch (error) {
      toast.error(error.message)
      console.log(error.message);
    }
  }

  const {values, errors, handleBlur, handleChange, handleSubmit, touched, isSubmitting} = useFormik({
    initialValues: {
      name: "",
      description: "",
      duration: "",
      status: ""
    },
    validationSchema: addProjectSchema,
    onSubmit
  }
  )


  return (
    <section className='w-full'>
      <MetaData title={"Add a new project"} />
      <header className='shadow w-full'>
        <h4 className='p-6 text-gray-700 text-lg font-semibold'>Add a new project</h4>
      </header>
      <article className='w-[70%] mx-auto'>
        <form className='p-6 text-gray-700 grid gap-4' onSubmit={handleSubmit}>
          <InputField 
            type="text"
            className={errors.name && touched.name ? `outline outline-1 outline-red-700` : `outline-teal-700`}
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            id="name"
            placeholder="Enter name of the project"
          />
          {errors.name && touched.name && <p className='text-red-700'>{errors.name}</p>}
          <TextArea
             className={errors.description && touched.description ? `outline outline-1 outline-red-700` : `outline-teal-700`}
             placeholder="Describe your project..."
             cols="30"
             rows="5"
             value={values.description}
             onChange={handleChange}
             onBlur={handleBlur}
             id="description"
          />
          {errors.description && touched.description && <p className='text-red-700'>{errors.description}</p>}
          <InputField
            className={errors.duration && touched.duration ? `outline outline-1 outline-red-700` : `outline-teal-700`}
            type="text"
            placeholder="Duration"
            value={values.duration}
            onChange={handleChange}
            onBlur={handleBlur}
            id="duration"
          />
          {errors.duration && touched.duration && <p className='text-red-700'>{errors.duration}</p>}
          <button type='submit' disabled={isSubmitting} className='bg-[#00396B] text-white rounded p-2'>Add</button>
        </form>
      </article>
    </section>
  )
}

export default AddProjectForm