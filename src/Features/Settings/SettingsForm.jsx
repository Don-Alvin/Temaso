import React, { useState } from 'react'
import InputField from '../../ui/InputField'
import Select from 'react-select'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { db, storage } from '../../apis/firebase'
import useAuth from '../../hooks/useAuth'
import { Timestamp, doc, updateDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { updateProfile } from 'firebase/auth'

const SettingsForm = () => {

    const { user } = useAuth()
    const navigate = useNavigate("")

    const [name, setName] = useState("")
    const [profilePicture, setProfilePicture] = useState(null)
    const [gender, setGender] = useState(null)
    const [dateOfBirth, setDateOfBirth] = useState("")

    const options = [
        {value: "female", label:"Female"},
        {value:"male", label:"Male"},
        {value: "other", label:"Other"},
        {value: null, label:"Prefer not to say"}
    ]


    const handleChange = async(e) => {
        e.preventDefault()
        try {
            const storageRef = ref(storage, `${user.email}/images/${profilePicture?.name}` )
            const uploadTask = uploadBytesResumable(storageRef, profilePicture)
            uploadTask.on('state_changed',
                ()=> {
                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadUrl) => {
                        const docRef = doc(db, 'users', user.uid)
                        await updateDoc(docRef, {
                            displayName: name,
                            photoUrl: downloadUrl,
                            dateOfBirth: Timestamp.fromDate(new Date(dateOfBirth)),
                            gender: gender?.value || null
                          });
                        await updateProfile(user, {
                            photoURL: downloadUrl,
                            displayName: name
                        })
                    })
                }
            )
            toast.success("Profile updated successfully")
            navigate('/dashboard')
        } catch (error) {
           console.error(error) 
        }
        
    }


  return (
    <section className='w-[50%] mx-auto border p-4 rounded-lg shadow-lg mt-6'>
        <h5 className='my-6 text-center text-xl'>Update your profile</h5>
        <form className='flex flex-col gap-4'>
            <InputField
                label="Username"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Update username"
            />
            <InputField
                label="Profile picture"
                type="file"
                onChange={e => setProfilePicture(e.target.files[0])}
                accept="image/*"
            />
            <InputField
                label="Enter date of birth"
                type="date"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
            />
            <label>Select Gender
                <Select
                    options={options}
                    defaultValue={gender}
                    onChange={setGender}
                    isSearchable
                />
            </label>
        <button onClick={handleChange} className='text-white bg-teal-700 p-1 rounded'>Save</button>
        </form>
    </section>
  )
}

export default SettingsForm