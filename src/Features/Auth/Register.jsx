import { Link, useNavigate } from "react-router-dom"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useState } from "react"
import MetaData from "../../Components/Meta/MetaData"
import useAuth from "../../hooks/useAuth"
import { registerUser } from "../../helper/users"


const Register = () => {

  const [name, setName] = useState(null)
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [passwordVisible, setPasswordVisible] = useState(false)

  const {user, setUser} = useAuth()
  
  const handlePassword = () => {
    setPasswordVisible(!passwordVisible)
  }

  const handleRegister = async(e) => {
    e.preventDefault()
    registerUser(name, email, password)
  }

  // const signInWithGoogle = async () => {
  //   try {
  //     await signInWithPopup(auth, googleProvider)
  //     navigate('/dashboard')
  //     toast.success("Registration successfull")
  //   } catch (error) {
  //     const errorMessage = error.message
  //     toast.error(errorMessage)
  //   }
  // }

  return (
    <section className='w-full flex items-center justify-center bg-[url("/images/authBg.jpg")] bg-cover bg-center bg-no-repeat'>
      <MetaData title={'Register an account'} />
      <div className="flex justify-center flex-col items-center border p-6 h-[auto] my-20 gap-4  border-teal-700 rounded-lg shadow-teal-700 shadow-md bg-white opacity-90 w-[90%] md:w-auto">
        <div className="title flex flex-col items-center">
          <h4 className="text-3xl text-gray-700 text-center">Explore more by joining us</h4>
        </div>
        <form className='py-2 w-[90%]' onSubmit={handleRegister}>
              <div className='flex flex-col gap-4 items-center'>
                <div className='flex flex-col gap-2 w-[100%]'>
                  <label className="text-gray-700 text-md">Name</label>
                  <input
                    className='p-2 border rounded-lg outline-teal-700 '
                    type="text"
                    required
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Enter your username'
                    autoComplete="off"
                  />
                </div>
                <div className='flex flex-col gap-2 w-[100%]'>
                  <label className="text-gray-700 text-md">Email</label>
                  <input
                    className='p-2 border rounded-lg outline-teal-700 '
                    type="email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Enter your email'
                    autoComplete="off"
                  />
                </div>
                  <div className='flex flex-col gap-2 relative w-[100%]'>
                    <label className="text-gray-700 text-md">Password</label>
                    <input
                      className='p-2 border rounded-lg outline-teal-700'
                      type={!passwordVisible ? 'password' : 'text'}
                      onChange={(e) =>  setPassword(e.target.value)}
                      required
                      placeholder='Enter your password'
                      autoComplete="off"
                    />
                    {passwordVisible && <AiOutlineEyeInvisible  className="absolute top-[62%] right-3" onClick={handlePassword}/>}
                    {!passwordVisible && <AiOutlineEye  className="absolute top-[62%] right-3" onClick={handlePassword}/>}
                  </div>
              <button type="submit" className='bg-teal-700 rounded-lg p-3 text-white font-semibold w-[100%]'>Register</button>
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