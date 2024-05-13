import React from 'react'
import  { ReactComponent as LoginLogo}  from '../images/LoginLogo.svg';
import './Component.css'
import { Link } from 'react-router-dom';

const LoginHead = () => {
  return (
    <div className='headerLogin'>
      <LoginLogo />
      <h1 className='hd1'>
        Log in
      </h1>
      <p>Don't have an account? <Link to='/' className='link'>Sign up</Link></p>
    </div>
  )
}

export default LoginHead
