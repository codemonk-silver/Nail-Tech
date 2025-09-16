import React from 'react';
import './navbar.css';
import { useState } from 'react';
import {Link} from 'react-scroll';

const Navbar = () => {

        const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
    <nav className='navbar'>
        <h1 className='logo'>Deizy Glitz</h1>
        <div className={`navlink ${isOpen ? "open" : ""}`}>
            <Link activeclass='active' to='contact' spy={true} smooth={true} offset={-100}>Home</Link>
            <a href=''>Services</a>
            <a href=''>Gallery</a>
            <a href=''>About</a>
            <a href='#contactsection'>Contact</a>
            <a className='navbtn' href=''>Book Now</a>
        </div>
         {/* Hamburger button */}
        <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </div>
    </nav>
    <hr />
    </div>
  )
}

export default Navbar