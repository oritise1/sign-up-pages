import React from 'react'
import './Component.css'
import Hides from '../images/Hide.svg';

const LoginInput = () => {
  return (
    <div>
        <div className='inputwrap'>
        <div className='columnOne'></div>
        <div className='columnTwo'></div>
        <div className='columnText'>OR</div>
        <div className='columnThree'></div>
        </div>
        <form className='form'>
        Your email  <br />
        <input type='email' placeholder='Your email' className='input' /><br />
         <div className='pass'>
        <p style={{display: 'inline',marginRight: '330px'}} >  Your password</p>
         <p style={{display: 'inline',margin: 0, textAlign:'center'}}> <img src={Hides} alt='no img' className='immg'/> Hide </p>
         <input type='password' placeholder='Your password' className='input11' />
        <a href='/' target={'_blank'} rel='noreferrer'className='link'> <p style={{textAlign:'right'}}>Forget your password</p></a>
        
         </div> <br />
       <div>
      <button className='btn1'>Log in</button>
    </div>
        </form>
    </div>
  )
}

export default LoginInput
