import React from 'react'
import './Component.css'
import { Link } from "react-router-dom"

const Button = () => {
  return (
    <div>
      <button className='btn'>Create an account</button>
      <p className='subHeader'>Already have an account? <Link to='/login' className='link'>Log in </Link></p>
    </div>
  )
}

export default Button
