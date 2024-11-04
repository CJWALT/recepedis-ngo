import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <h3>Sorry, page not found!</h3>
      <Link to='/' className='text-btnColor'>Go back to homepage</Link>
    </div>
  )
}

export default NotFound
