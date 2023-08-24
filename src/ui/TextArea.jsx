import React from 'react'

const TextArea = ({id, cols, name, rows, placeholder, value, onChange}) => {
  return (
    <textarea
     className='border rounded shadow p-4 outline-teal-950'
     name={name} 
     id={id} cols={cols} 
     rows={rows} 
     placeholder={placeholder}
     value={value}
     onChange={onChange}
     required
    /> 
  )
}

export default TextArea