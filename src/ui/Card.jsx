import React from 'react'

const Card = ({children}) => {
  return (
    <div to="project" className='border rounded shadow w-[250px] flex flex-col'>
        {children}
    </div>
  )
}

export default Card