import React from 'react'
import './header.css'
import {Link} from 'react-router-dom'
function Header() {
  return (
    <div className='header'>
        <ul className='logo'><span>INTRANET</span></ul>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/contacts'>Contacts</Link></li>
            <li><Link to='/register'>Register</Link></li>
            <li><Link to='/blogs'>Blogs</Link></li>
            <li><Link to='/product'>Products</Link></li>
        </ul>
    </div>
  )
}

export default Header
