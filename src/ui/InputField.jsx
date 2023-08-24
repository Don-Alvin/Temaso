import React from 'react'

const InputField = ({value, label, placeholder, onChange, id, type}) => {
  return (
    <div className='flex flex-col'>
        {label && <label htmlFor={id}>{label}</label>}
        <input
        type={type}
        id={id}
        value={value}
        className='border rounded shadow outline-teal-950 p-2'
        required
        placeholder={placeholder}
        onChange={onChange}
    />
    </div>
    
  )
}

export default InputField