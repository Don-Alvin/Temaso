import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({children}) => {
  return (
    <Link to="project" className='border rounded shadow w-[250px] flex flex-col'>
        {children}
    </Link>
  )
}

export default Card