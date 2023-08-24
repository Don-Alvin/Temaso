import { Link, useNavigate } from "react-router-dom"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { RxAvatar } from "react-icons/rx"
import { useState } from "react"
import { toast } from "react-toastify"
import { doc, setDoc } from "firebase/firestore"; 
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage"
import MetaData from "../../Components/Meta/MetaData"
import { auth, db, storage } from "../../apis/firebase"




const Register = () => {

  const [displayName, setDisplayName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordVisible, setPasswordVisible] = useState(false)

  const navigate = useNavigate()

  const handlePassword = () => {
    setPasswordVisible(!passwordVisible)
  }

  const handleRegister = async(e) => {
    e.preventDefault()
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log(res.user);
      await updateProfile(res.user, {
        displayName
      })
      await setDoc(doc(db, "users", res.user.uid), {
        uid: res.user.uid,
        displayName,
        email,
      });
      toast.success('Registration successfull')
      navigate('/')

      // const storageRef = ref(storage, avatar);
      // const uploadTask = uploadBytesResumable(storageRef, file);

      // Register three observers:
      // uploadTask.on('state_changed', 
      // (snapshot) => {
      //   // Observe state change events such as progress, pause, and resume
      //   // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      //   switch (snapshot.state) {
      //     case 'paused':
      //       console.log('Upload is paused');
      //       break;
      //     case 'running':
      //       console.log('Upload is running');
      //       break;
      //   }
      // },
      //   (error) => {
      //     toast.error(error.message)
      //   }, 
      //   () => {
      //     getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
      //       await updateProfile(res.user, {
      //         displayName,
      //         photoURL: downloadURL
      //       })
      //     });
      //   }
      // );
    } catch (error) {
      toast.error(error.message);
    }
  }

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
                    onChange={(e) => setDisplayName(e.target.value)}
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
                  {/* <div>
                    <input
                     type='file'
                     onChange={(e) => setAvatar(e.target.value)}
                     className="hidden"
                     id="file"
                    />
                    <label 
                      htmlFor="avatar"
                      className="text-gray-700 flex items-center gap-2 cursor-pointer"
                    >
                      <RxAvatar
                        className="text-3xl"
                      />
                      <p>Add a profile picture</p>
                    </label>
                  </div> */}
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