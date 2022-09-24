import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="App">
     <nav className='navbar'>
    <Link className='home-link'  to="/Home">Home</Link>
    <Link className='home-link' to="/Student">Students</Link>
    <Link className='home-link' to="/Contactus">Contact Us</Link>
    
     
     
     </nav>
    </div>
  )
}

export default Navbar