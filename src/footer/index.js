import React from 'react'
import './footer.css'
function Footer() {
    
  return (
    <div>
      <footer className='footer'>
        <div className='footer-container'>
        <ul>
            <li className='footer-desc'>Darjeeling District is divided into four sub divisions. Namely, Darjeeling Sadar, Kurseong, Mirik and Siliguri.</li>
        </ul>
        <ul>
            <li>Home</li>
            <li>Link</li>
            <li>Contacts</li>
            <li>Blogs</li>
            <li>Info</li>
        </ul>
        <ul className='icon-container'>
        <span ><img className='icon' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png' /></span>
        <a href='https://www.linkedin.com/in/rohan-kumar-shah-49b116170?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BtXWciydETPSTiTDWlUllkA%3D%3D'><img className='icon' src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/2048px-LinkedIn_icon_circle.svg.png' /></a>
        <span><img className='icon' src='https://cdn-icons-png.flaticon.com/512/25/25231.png' /></span>
        </ul>
        </div>
        <span>
            <p> Copyright | All rights reserved 2022</p>
        </span>
      </footer>
    </div>
  )
}

export default Footer
