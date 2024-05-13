import React from 'react'
import './Component.css'
import { ReactComponent as FacebookLogo} from '../images/FacebookLogo.svg'
import { ReactComponent as GoogleLogo} from '../images/GoogleLogo.svg'
const Btn = () => {
  return (
    <div>
      <button className='btn11'><FacebookLogo className='both' />Log in with Facebook</button>
      <button className='btn12'> <GoogleLogo className='both'/>Log in with Google</button>
    </div>
  )
}

export default Btn
