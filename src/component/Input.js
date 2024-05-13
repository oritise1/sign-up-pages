import React from 'react'
import './Component.css'
import Hides from '../images/Hide.svg';

function Input() {
  return (
    <div>
      <form className='form'>
         Email  <br />
        <input type='email' placeholder='Email' className='input' /><br />
         UserName  <br />
        <input type='text' placeholder='Username' className='input' /><br />
      <div className='pass'>
        <p style={{display: 'inline',marginRight: '375px'}} >  Password</p>
         <p style={{display: 'inline',margin: 0, textAlign:'center'}}> <img src={Hides} alt='no img' className='immg'/> Hide </p>
         </div> <br />
        <input type='password' placeholder='Password' className='input1' />
        <p>
            <ul className='list'>
                <li> Use 8 or more character</li>
                <li>One uppercase character</li>
                <li>One lowercase character</li>
                <li>One special character</li>
                <li>One number</li>
            </ul>
        </p>
      </form>
    </div>
  )
}

export default Input
