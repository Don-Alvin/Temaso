import React from 'react'

const Card = ({children}) => {
  return (
    <div to="project" className='border rounded shadow w-[250px] h-[250px] overflow-y-scroll overflow-x-hidden flex flex-col'>
        {children}
    </div>
  )
}

export default Card