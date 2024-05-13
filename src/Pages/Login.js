import React from 'react'
import  { ReactComponent as LoginImg}  from '../images/BackImage.svg';
import './Login.css';
import LoginHead from '../component/LoginHead';
import LoginInput from '../component/LoginInput';
import Btn from '../component/Btn';


const Login = () => {
  return (
    <>
         
        <LoginImg className='Img1' />
        <div className='loginHead'>
            <div className='work'>
                <LoginHead />
                <Btn />
                <LoginInput />
            </div>
        </div> 
    </>
  )
}

export default Login
