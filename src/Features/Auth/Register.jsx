import { Link, useNavigate } from "react-router-dom"
import { FcGoogle } from 'react-icons/fc'
import { toast } from "react-toastify"
import { doc, setDoc } from "firebase/firestore"; 
import { auth, db } from "../../apis/firebase"
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth"
import { useFormik } from "formik";
import MetaData from "../../Components/Meta/MetaData"
import { registerSchema } from "./Schemas";


const Register = () => {

  const navigate = useNavigate()
  const provider = new GoogleAuthProvider()

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

  const registerWithGoogle = async() => {
    try {
      const res = await signInWithPopup(auth, provider)
      const user = res.user
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        online: true,
        photoUrl: user.photoURL
      });
      toast.success('Login successfull')
      navigate('/dashboard')
    } catch (error) {
      toast.error(error.message)
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
    <section className='w-full flex items-center justify-center bg-[url("/images/hero2Bg.jpg")] bg-cover bg-center bg-no-repeat'>
      <MetaData title={'Register an account'} />
      <div className="flex justify-center flex-col items-center border p-6 h-[auto] my-20 gap-2 rounded-lg  shadow-md bg-white opacity-90 w-[90%] md:w-auto">
        <div className="title flex flex-col items-center">
          <h4 className="text-xl text-gray-700 text-center">Explore more by joining us</h4>
        </div>
        <button 
          className="shadow flex items-center rounded bg-[#00396B]"
          onClick={registerWithGoogle}
        >
          <div className="p-2">
            <FcGoogle className="w-8 h-8"/>
          </div>
          
          <p className="text-white p-2 font-semibold rounded-r">Sign in with google</p>
        </button>
        <span className="text-gray-700 font-semibold">OR</span>
        <form className='w-full' onSubmit={handleSubmit}>
              <div className='flex flex-col gap-4 p-4'>
                <div className="flex-col flex md:flex-row gap-4">
                  <div className='flex flex-col gap-2 w-[100%]'>
                    <label className="text-gray-700 text-md">Name</label>
                    <input
                      className={`p-2 border rounded-lg bg-white placeholder:text-gray-700 ${errors.displayName && touched.displayName ? `outline outline-1 outline-red-700` : `outline-teal-700`}`}
                      type="text"
                      value={values.displayName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="displayName"
                      placeholder='Enter your username'
                      autoComplete="off"
                    />
                    {errors.displayName && touched.displayName && <p className='text-red-700'>{errors.displayName}</p>}
                  </div>
                  <div className='flex flex-col gap-2 w-[100%]'>
                    <label className="text-gray-700 text-md">Email</label>
                    <input
                      className={`p-2 border rounded-lg bg-white placeholder:text-gray-700 ${errors.email && touched.email ? `outline outline-1 outline-red-700` : `outline-teal-700`}`}
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
                </div>
                  <div className='flex flex-col gap-2 relative w-full'>
                    <label className="text-gray-700 text-md">Password</label>
                    <input
                      className={`p-2 border rounded-lg bg-white placeholder:text-gray-700 ${errors.password && touched.password ? `outline outline-1 outline-red-700` : `outline-teal-700`}`}
                      type={'password'}
                      id="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      placeholder='Enter your password'
                      autoComplete="off"
                    />
                    {errors.password && touched.password && <p className='text-red-700'>{errors.password}</p>}
                  </div>
              <button type="submit" disabled={isSubmitting} className='bg-[#00396B] rounded-lg p-3 text-white font-semibold w-[100%]'>Register</button>
          </div>
        </form>
        <div>
          <span className='text-gray-700'>Already registered? <Link to='/login' className='text-[#00396B] font-semibold'>Log in</Link></span>
        </div>
        
      </div>
    </section>
  )
}

export default Register