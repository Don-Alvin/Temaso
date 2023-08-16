import { Link, useNavigate } from "react-router-dom"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useState } from "react"
import MetaData from "../../Components/Meta/MetaData"
import useAuth from "../../hooks/useAuth"
import { logInUser } from "../../helper/users"

const Login = () => {

  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [passwordVisible, setPasswordVisible] = useState(false)

  const handlePassword = () => {
    setPasswordVisible(!passwordVisible)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    logInUser(email, password)
  }

  // const signInWithGoogle = async () => {
  //   try {
  //     await signInWithPopup(auth, googleProvider)
  //     navigate('/dashboard')
  //   } catch (error) {
  //     const errorMessage = error.message
  //     toast.error(errorMessage)
  //   }
  // }

  return (
    <section className='w-full h-screen  flex items-center justify-center bg-[url("/images/authBg.jpg")] bg-cover bg-center bg-no-repeat'>
      <MetaData title={'Sign into your account'} />
      <div className="flex justify-start flex-col items-center border p-6  border-teal-700 rounded-lg shadow-teal-700 shadow-md bg-white opacity-90 w-[90%] md:w-auto">
        <div className="title flex flex-col items-center ">
          <h4 className="text-3xl text-gray-700 text-center">Hello again!</h4>
          <span className='py-4 text-xl w-2/3 text-center text-gray-700'>Log in into your account</span>
        </div>
        <form className='py-1' onSubmit={handleSubmit}>
          <div className='flex flex-col gap-4'>
              <div className='flex flex-col gap-2'>
                <label className="sr-only text-gray-700 text-xl">Email</label>
                <input
                  className='p-2 border rounded-lg outline-teal-700'
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder='Enter your email'
                />
              </div>
            <div className='flex flex-col gap-2 relative'>
              <label className="sr-only text-gray-700 text-xl">Password</label>
              <input
                className='p-2 border rounded-lg outline-teal-700'
                type={!passwordVisible ? 'password' : 'text'}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder='Enter your password'
              />
              {passwordVisible && <AiOutlineEyeInvisible  className="absolute top-[33%] right-2" onClick={handlePassword}/>}
              {!passwordVisible && <AiOutlineEye  className="absolute top-[33%] right-2" onClick={handlePassword}/>}
            </div>
            <button type='submit' className='bg-teal-700 rounded-lg p-3 text-white font-semibold'>Log in</button>
          </div>
        </form>
        <div className='py-4'>
          <span className='text-gray-700'>Not registered? <Link to='/register' className='text-teal-700'>Register</Link></span>
        </div>
      </div>
    </section>
  )
}

export default Login