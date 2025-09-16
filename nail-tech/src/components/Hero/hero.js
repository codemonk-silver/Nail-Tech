import React from 'react';
import './hero.css';
import heroimg from '../../assets/heroimg.png';

const Hero = () => {
  return (
            <div className='herosection'>
                <div className='heroimg'>
                    <div className='herotitle'>
                      <h1 className='heroheading'>
                        Elevate Your Style With Exquisite Nail Art
                      </h1>
                      <p className='herodes'>
                            Welcome to our nail studio, where artistry meets elegance. Our skilled technicians are dedicated
                            to crafting stunning nail design that reflect your unique personality and style.
                            EXperience the ultimate in nail care and leave with nails that are as beautiful as they are
                            healthy.
                      </p>
                      <div className='herobtn'>
                        <button className='herobtn1'>Book Appointment</button>
                        <button className='herobtn2'>View Services</button>
                      </div>
                    </div>
                </div>
                
                
            </div>
  )
}

export default Hero