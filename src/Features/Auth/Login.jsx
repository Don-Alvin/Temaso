import { useFormik } from "formik"
import MetaData from "../../../components/layout/MetaData"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { loginValidate } from "../../../helper/validate"
import { toast } from "react-toastify"
import axios from "axios"
import { server } from "../../../apis/server"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useState } from "react"
import useAuth from "../../../hooks/useAuth"

const Login = () => {

  const [passwordVisible, setPasswordVisible] = useState(false)
  const {user, setUser} = useAuth()

  const handlePassword = () => {
    setPasswordVisible(!passwordVisible)
  }

  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: loginValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => {
      try {
        const response = await axios.post(`${server}/login`, values)
        console.log(response.data);
        const token = await axios.post(`${server}/renewAccessToken`, response?.data?.access_token);
        
        setUser(response?.data)
        toast.success("Login successfull")
        values.email = ""
        values.password = ""
        navigate(from, {replace: true})
      } catch (error) {
        toast.error("Login failed")
      }
    }
  })
  return (
    <section className='w-full h-screen  flex items-center justify-center bg-[url("/images/authBg.jpg")] bg-cover bg-center bg-no-repeat'>
      <MetaData title={'Sign into your account'} />
      <div className="flex justify-start flex-col items-center border p-6  border-[#ff9800] rounded-lg shadow-[#ff9800] shadow-md bg-white opacity-90 w-[90%] md:w-auto">
        <div className="title flex flex-col items-center ">
          <h4 className="text-3xl text-gray-700 text-center">Hello again!</h4>
          <span className='py-4 text-xl w-2/3 text-center text-gray-700'>Log in into your account</span>
        </div>
        <form className='py-1' onSubmit={formik.handleSubmit}>
          <div className='flex flex-col gap-4'>
              <div className='flex flex-col gap-2'>
                <label className="sr-only text-gray-700 text-xl">Email</label>
                <input
                  className='p-2 border rounded-lg outline-[#ff9800]'
                  type="email"
                  {...formik.getFieldProps('email')}
                  required
                  placeholder='Enter your email'
                  autoComplete="on"
                />
              </div>
            <div className='flex flex-col gap-2 relative'>
              <label className="sr-only text-gray-700 text-xl">Password</label>
              <input
                className='p-2 border rounded-lg outline-[#ff9800]'
                type={!passwordVisible ? 'password' : 'text'}
                {...formik.getFieldProps('password')}
                required
                placeholder='Enter your password'
              />
              {passwordVisible && <AiOutlineEyeInvisible  className="absolute top-[33%] right-2" onClick={handlePassword}/>}
              {!passwordVisible && <AiOutlineEye  className="absolute top-[33%] right-2" onClick={handlePassword}/>}
            </div>
            <button type='submit' className='bg-[#ff9800] rounded-lg p-3 text-white font-semibold'>Log in</button>
          </div>
        </form>
        <div className='py-4'>
          <span className='text-gray-700'>Not registered? <Link to='/register' className='text-[#ff9800]'>Register</Link></span>
        </div>
      </div>
    </section>
  )
}

export default Login