import { Link } from "react-router-dom"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import MetaData from "../../../components/layout/MetaData"
import { useState } from "react"


const Register = () => {

  const [passwordVisible, setPasswordVisible] = useState(false)
  
  const handlePassword = () => {
    setPasswordVisible(!passwordVisible)
  }

  return (
    <section className='w-full flex items-center justify-center bg-[url("/images/authBg.jpg")] bg-cover bg-center bg-no-repeat'>
      <MetaData title={'Register an account'} />
      <div className="flex justify-center flex-col items-center border p-6 h-[auto] my-40  border-[#ff9800] rounded-lg shadow-[#ff9800] shadow-md bg-white opacity-90 w-[90%] md:w-auto">
        <div className="title flex flex-col items-center">
          <h4 className="text-3xl text-gray-700 text-center">Explore more by joining us</h4>
          <span className='py-4 text-xl w-2/3 text-center text-gray-700'>Explore more by joining us</span>
        </div>
        <form className='py-2 w-[90%]' onSubmit={formik.handleSubmit}>
          <div className='flex flex-col gap-4'>
              <div className='flex flex-col gap-2'>
                <label className="text-gray-700 text-md">Email</label>
                <input
                  className='p-2 border rounded-lg outline-[#ff9800] '
                  type="email"
                  required
                  placeholder='Enter your email'
                  autoComplete="off"
                />
              </div>
              <div className='flex flex-col gap-2'>
                <label className="text-gray-700 text-md">Username</label>
                <input
                  className='p-2 border rounded-lg outline-[#ff9800]'
                  type="text"
                  required
                  placeholder='Enter your username'
                  autoComplete="off"
                />
              </div>

              <div className='flex flex-col gap-2'>
                <label className="text-gray-700 text-md">Date of birth</label>
                <input
                  className='p-2 border rounded-lg outline-[#ff9800] text-gray-700'
                  type="date"
                  required
                  placeholder='Enter your email'
                  autoComplete="off"
                />
              </div>

                <div className='flex flex-col gap-2 relative'>
                  <label className="text-gray-700 text-md">Password</label>
                  <input
                    className='p-2 border rounded-lg outline-[#ff9800]'
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
                    className='p-2 border rounded-lg outline-[#ff9800]'
                    type="password"
                    required
                    placeholder='Confirm password'
                    autoComplete="off"
                  />
                </div>
              <button type="submit" className='bg-[#ff9800] rounded-lg p-3 text-white font-semibold'>Register</button>
          </div>
        </form>
        <div className='py-4'>
          <span className='text-gray-700'>Already registered? <Link to='/login' className='text-[#ff9800]'>Log in</Link></span>
        </div>
      </div>
    </section>
  )
}

export default Register