import React from 'react'
import './contacts.css'

function Contacts() {
    const onSubmitHandler = (e) =>{
        e.preventDefault();
    };
  return (
    <div className='contacts'>
     
      <form className='frm' onSubmit={(e)=>{onSubmitHandler(e)}}>
        <h3>Contact Us</h3>
        <input required placeholder='Name' />
        <input required placeholder='Email' />
        <input required placeholder='Phone No.' />
        <textarea required placeholder='Message' />
        <button className='btn' type='submit'>Submit</button>

      </form>
    </div>
  )
}

export default Contacts
