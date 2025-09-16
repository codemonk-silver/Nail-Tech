import React from 'react'
import './feature.css'
import f1 from '../../assets/f1.jpg';
import f2 from '../../assets/f2.jpg';
import f3 from '../../assets/f3.jpg';

const Feature = () => {
  return (
    <div className='featuresection'>
        <h1>Featured Services</h1>
        <div className='featurecard'>
            <div className='featurecard1'>
                    <img src={f1} alt='' />
                    <h4>Classic Miniature</h4>
                    <p>soft gradient hues for a sophisticated look.</p>
            </div>
            <div className='featurecard2'>
                    <img src={f2} alt='' />
                    <h4>Gel Polish Application</h4>
                    <p>Sparkling design to make a statement</p>
            </div>
            <div className='featurecard3'>
                    <img src={f3} alt='' />
                    <h4>Acrylic Nail Extension</h4>
                    <p>clean line and subtle accents for everyday style.</p>
            </div>
        </div>
    </div>
  )
}

export default Feature