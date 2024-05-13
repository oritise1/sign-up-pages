import React from 'react'
import './Component.css'

const Terms = () => {
  return (
    <div className='term'>
      <p className='check'>
        <input type='checkbox' required defaultChecked className='box' />
        I want to receive emails about the product, feature updates, events, and marketing promotions.
      </p>
      <p className='terms'> By creating an account, you agree to the <a href='#terms' className='link'>Terms of use</a> and <a href='#privacy' className='link'>Privacy Policy.</a> </p>
    </div>
  )
}

export default Terms
