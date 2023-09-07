import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { toast } from "react-toastify"
import { doc, setDoc } from "firebase/firestore"; 
import { auth, db } from "../../apis/firebase"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { useFormik } from "formik";
import MetaData from "../../Components/Meta/MetaData"
import { registerSchema } from "./Schemas";


const Register = () => {

  const [passwordVisible, setPasswordVisible] = useState(false)

  const navigate = useNavigate()

  const handlePassword = () => {
    setPasswordVisible(!passwordVisible)
  }

  const onSubmit = async() => {
    try {
      const res = await createUserWithEmailAndPassword(auth, values.email, values.password);
      await updateProfile(res.user, {
        displayName: values.displayName
      })
      await setDoc(doc(db, "users", res.user.uid), {
        uid: res.user.uid,
        displayName: values.displayName,
        email: values.displayName,
        online: true,
        photoUrl: ""
      });
      toast.success('Registration successfull')
      navigate('/dashboard')
    } catch (error) {
      toast.error(error.message);
    }
  }

  const {values, errors, handleBlur, handleChange, handleSubmit, touched, isSubmitting} = useFormik({
    initialValues: {
      displayName: "",
      email: "",
      password: ""
    },
    validationSchema: registerSchema,
    onSubmit
  }
  )


  return (
    <section className='w-full flex items-center justify-center bg-[url("/images/authBg.jpg")] bg-cover bg-center bg-no-repeat'>
      <MetaData title={'Register an account'} />
      <div className="flex justify-center flex-col items-center border p-6 h-[auto] my-20 gap-4  border-teal-700 rounded-lg shadow-teal-700 shadow-md bg-white opacity-90 w-[90%] md:w-auto">
        <div className="title flex flex-col items-center">
          <h4 className="text-3xl text-gray-700 text-center">Explore more by joining us</h4>
        </div>
        <form className='py-2 w-[90%]' onSubmit={handleSubmit}>
              <div className='flex flex-col gap-4 items-center'>
                <div className='flex flex-col gap-2 w-[100%]'>
                  <label className="text-gray-700 text-md">Name</label>
                  <input
                    className={`p-2 border rounded-lg outline-teal-700 ${errors.displayName && touched.displayName && `outline-red-700`}`}
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.displayName}
                    id="displayName"
                    placeholder='Enter your username'
                    autoComplete="off"
                  />
                  {errors.displayName && touched.displayName && <p className='text-red-700'>{errors.displayName}</p>}
                </div>
                <div className='flex flex-col gap-2 w-[100%]'>
                  <label className="text-gray-700 text-md">Email</label>
                  <input
                    className={`p-2 border rounded-lg outline-teal-700 ${errors.email && touched.email && `outline-red-700`}`}
                    type="email"
                    id="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder='Enter your email'
                    autoComplete="off"
                  />
                  {errors.email && touched.email && <p className='text-red-700'>{errors.email}</p>}
                </div>
                  <div className='flex flex-col gap-2 relative w-[100%]'>
                    <label className="text-gray-700 text-md">Password</label>
                    <input
                      className={`p-2 border rounded-lg outline-teal-700 ${errors.password && touched.password && `outline-red-700`}`}
                      type={!passwordVisible ? 'password' : 'text'}
                      id="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      placeholder='Enter your password'
                      autoComplete="off"
                    />
                    {errors.password && touched.password && <p className='text-red-700'>{errors.password}</p>}
                    {passwordVisible && <AiOutlineEyeInvisible  className="absolute top-[62%] right-3" onClick={handlePassword}/>}
                    {!passwordVisible && <AiOutlineEye  className="absolute top-[62%] right-3" onClick={handlePassword}/>}
                  </div>
              <button type="submit" disabled={isSubmitting} className='bg-teal-700 rounded-lg p-3 text-white font-semibold w-[100%]'>Register</button>
          </div>
        </form>
        <div className='py-4'>
          <span className='text-gray-700'>Already registered? <Link to='/login' className='text-teal-700'>Log in</Link></span>
        </div>
        
      </div>
    </section>
  )
}

export default Register