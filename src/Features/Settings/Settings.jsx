import React from 'react'
import MetaData from '../../Components/Meta/MetaData'
import SettingsForm from './SettingsForm'

const Settings = () => {
  return (
    <section className='w-full text-gray-700'>
      <MetaData title={"Update your profile"} />
      <header className='w-full border-b p-6 shadow'>
        <h1 className='font-medium text-xl'>Update your profile</h1>
      </header>
      <article className='p-4'>
        <SettingsForm />
      </article>
    </section>
  )
}

export default Settings