import { Link, useNavigate } from "react-router-dom"
import { FcGoogle } from "react-icons/fc"
import { toast } from "react-toastify"
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import { doc, setDoc, updateDoc } from "firebase/firestore"
import { useFormik } from "formik"
import MetaData from "../../Components/Meta/MetaData"
import { auth, db } from "../../apis/firebase"
import { loginSchema } from "./Schemas"


const Login = () => {

  const navigate = useNavigate()
  const provider = new GoogleAuthProvider()

  const onSubmit = async () => {
    try {
      const res = await signInWithEmailAndPassword(auth, values.email, values.password);
      const docRef = doc(db, "users", res.user.uid)
      await updateDoc(docRef, {
        online: true,
      })
      toast.success("Login successful");
      navigate("/dashboard");
    } catch (error) {
      toast.error('Check password or email');
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
    validationSchema: loginSchema,
    onSubmit
  }
  )

  return (
    <section className='w-full h-screen  flex items-center justify-center bg-[url("/images/hero2Bg.jpg")] bg-cover bg-center bg-no-repeat'>
      <MetaData title={'Sign into your account'} />
      <div className="flex justify-start flex-col items-center border p-6  rounded-lg shadow-md bg-white opacity-90 w-[90%] md:w-auto gap-2">
        <div className="title flex flex-col items-center ">
          <h4 className="text-3xl text-gray-700 text-center">Hello again!</h4>
          <span className='py-4 text-xl  text-center text-gray-700'>Log in into your account</span>
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
        <form className='py-1' onSubmit={handleSubmit}>
          <div className='flex flex-col gap-4'>
            <div className="flex flex-col md:flex-row gap-4">
              <div className='flex flex-col gap-2 w-[100%]'>
                <label className="sr-only text-gray-700 text-xl">Email</label>
                <input
                  className={`p-2 border rounded-lg bg-white placeholder:text-gray-700 ${errors.email && touched.email ? `outline outline-1 outline-red-700` : `outline-teal-700`}`}
                  type="email"
                  id="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder='Enter your email'
                />
                {errors.email && touched.email && <p className='text-red-700'>{errors.email}</p>}
              </div>
              <div className='flex flex-col gap-2 relative'>
                <label className="sr-only text-gray-700 text-xl">Password</label>
                <input
                  className={`p-2 border rounded-lg bg-white placeholder:text-gray-700 ${errors.password && touched.password ? `outline outline-1 outline-red-700` : `outline-teal-700`}`}
                  type={'password'}
                  id="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder='Enter your password'
                />
                {errors.password && touched.password && <p className='text-red-700'>{errors.password}</p>}
              </div>
            </div>
            <button type='submit' disabled={isSubmitting} className='bg-[#00396B] rounded-lg p-3 text-white font-semibold'>Log in</button>
          </div>
        </form>
        <div className='py-4'>
          <span className='text-gray-700'>Not registered? <Link to='/register' className='text-[#00396B] font-semibold'>Register</Link></span>
        </div>
      </div>
    </section>
  )
}

export default Login