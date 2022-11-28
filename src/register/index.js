import React from 'react'
import './register.css'

function Register() {
  return (
    <div className='regis'>
      
      <form className='frm'>
        <h2>Register</h2>
        <input placeholder='Name' />
        <input placeholder='Username' />
        <input placeholder='Phone Number' />
        <input placeholder='Email' />
        <input placeholder='Password' />
        <input placeholder='Confirm Password' />
        <button type='button'>Submit</button>
      </form>
    </div>
  )
}

export default Register
