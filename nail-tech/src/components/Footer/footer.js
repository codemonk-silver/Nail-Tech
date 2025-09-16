import React from 'react'
import './footer.css';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <div className='footersection'>
        <div className='footerlink'>
             <Link activeclass='active' to='home' spy={true} smooth={true} offset={0}>Home</Link>
                        <Link activeclass='active' to='trendsub' spy={true} smooth={true} offset={0}>Services</Link>
                        <Link activeclass='active' to='gallery' spy={true} smooth={true} offset={0}>Gallery</Link>
                        <Link activeclass='active' to='about' spy={true} smooth={true} offset={0}>About</Link>
                        <Link activeclass='active' to='contact' spy={true} smooth={true} offset={0}>Contact</Link>
        </div>
        <p>2025 copyright reserved</p>
    </div>
  )
}

export default Footer