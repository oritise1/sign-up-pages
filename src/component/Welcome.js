import React from 'react'
import './Component.css'
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <div className='head'>
      <h1 className='header'>
        Welcome to Design Community
      </h1>
      <p className='subHeader'>Already have an account? <Link to='/login' className='link'>Log in </Link></p>
    </div>
  )
}

export default Welcome
