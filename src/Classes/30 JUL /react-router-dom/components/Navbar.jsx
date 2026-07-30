import {Link} from 'react-router-dom'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex gap-4 bg-gray-200 p-4 justify-center'>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
  )
}

export default Navbar