import React from 'react';
import './navbar.css';
import { useState } from 'react';
import {Link} from 'react-scroll';

const Navbar = () => {

        const [isOpen, setIsOpen] = useState(false);
         
        // function to handle link clicks
        const handleLinkClick = () => {
        setIsOpen(false); // close menu after click
        };

  return (
    <div>
    <nav className='navbar' id='home'>
        <h1 className='logo'>Deizy Glitz</h1>
        <div className={`navlink ${isOpen ? "open" : ""}`}>
            <Link activeClass='active' to='home' spy={true} smooth={true} offset={0} onClick={handleLinkClick}>Home</Link>
            <Link activeClass='active' to='trendsub' spy={true} smooth={true} offset={0} onClick={handleLinkClick}>Services</Link>
            <Link activeClass='active' to='gallery' spy={true} smooth={true} offset={0} onClick={handleLinkClick}>Gallery</Link>
            <Link activeClass='active' to='about' spy={true} smooth={true} offset={0} onClick={handleLinkClick}>About</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={0}onClick={handleLinkClick}>Contact</Link>
            <Link activeclass='active' to='contact' spy={true} smooth={true} offset={0} className='navbtn' onClick={handleLinkClick}>Book Now</Link>
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