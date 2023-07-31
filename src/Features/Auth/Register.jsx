import { Link } from "react-router-dom"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useState } from "react"
import MetaData from "../../Components/Meta/MetaData"


const Register = () => {

  const [passwordVisible, setPasswordVisible] = useState(false)
  
  const handlePassword = () => {
    setPasswordVisible(!passwordVisible)
  }

  return (
    <section className='w-full flex items-center justify-center bg-[url("/images/authBg.jpg")] bg-cover bg-center bg-no-repeat'>
      <MetaData title={'Register an account'} />
      <div className="flex justify-center flex-col lg:block items-center border p-6 h-[auto] my-40  border-teal-700 rounded-lg shadow-teal-700 shadow-md bg-white opacity-90 w-[90%] md:w-auto">
        <div className="title flex flex-col items-center">
          <h4 className="text-3xl text-gray-700 text-center">Explore more by joining us</h4>
        </div>
        <form className='py-2 w-[90%]'>
          <div className='flex flex-col gap-4'>
              <div className="lg:flex gap-4">
                <div className='flex flex-col gap-2'>
                  <label className="text-gray-700 text-md">Email</label>
                  <input
                    className='p-2 border rounded-lg outline-teal-700 '
                    type="email"
                    required
                    placeholder='Enter your email'
                    autoComplete="off"
                  />
                </div>
                <div className='flex flex-col gap-2'>
                  <label className="text-gray-700 text-md">Username</label>
                  <input
                    className='p-2 border rounded-lg outline-teal-700'
                    type="text"
                    required
                    placeholder='Enter your username'
                    autoComplete="off"
                  />
                </div>
              </div>

                <div className="lg:flex gap-4">
                  <div className='flex flex-col gap-2 relative'>
                    <label className="text-gray-700 text-md">Password</label>
                    <input
                      className='p-2 border rounded-lg outline-teal-700'
                      type={!passwordVisible ? 'password' : 'text'}
                      required
                      placeholder='Enter your password'
                      autoComplete="off"
                    />
                    {passwordVisible && <AiOutlineEyeInvisible  className="absolute top-[62%] right-3" onClick={handlePassword}/>}
                    {!passwordVisible && <AiOutlineEye  className="absolute top-[62%] right-3" onClick={handlePassword}/>}
                  </div>
                  <div className='flex flex-col gap-2'>
                    <label className="text-gray-700 text-md">Confirm Password</label>
                    <input
                      className='p-2 border rounded-lg outline-teal-700'
                      type="password"
                      required
                      placeholder='Confirm password'
                      autoComplete="off"
                    />
                  </div>
                </div>
              <button type="submit" className='bg-teal-700 rounded-lg p-3 text-white font-semibold'>Register</button>
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