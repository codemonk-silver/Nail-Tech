import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <div>
    <nav className='navbar'>
        <h1 className='logo'>Deizy Glitz</h1>
        <div className='navlink'>
            <a href=''>Home</a>
            <a href=''>Services</a>
            <a href=''>Gallery</a>
            <a href=''>About</a>
            <a href=''>Contact</a>
            <a className='navbtn' href=''>Book Now</a>
        </div>
    </nav>
    <hr />
    </div>
  )
}

export default Navbar