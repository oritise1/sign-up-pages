import React from 'react'
import Button from '../component/Button';
import Input from '../component/Input';
import Terms from '../component/Terms';
import Welcome from '../component/Welcome';
import {ReactComponent as SignUpImg} from '../images/Signupimg.svg';
import './SignUp.css'

const SignUp = () => {
  return (
    <div className='wrap'>
        <div className="left">
          <div className='welcome'>
            <Welcome />
              <Input />
              <Terms />
              <Button />
            </div> 
      </div>
      <div className='right'>
            <SignUpImg className="img" />
      </div>
    </div>
  )
}

export default SignUp
