import React from 'react';
import './trend.css';
import ta from '../../assets/ta.jpg';
import tb from '../../assets/tb.jpg';
import tc from '../../assets/tc.jpg';

const Trend = () => {
  return (
    <div className='herosub' id='trendsub'>
                    <h1>Popular Nail Art Trends</h1>
                    <div className='herotrend'>
                      <div className='trend1'>
                        <img src={ta} alt='' />
                        <h4>Ombre Elegant</h4>
                        <p>soft gradient hues for a sophisticated look.</p>
                      </div>
                      <div className='trend2'>
                          <img src={tb} alt='' />
                          <h4>Glitter Glam</h4>
                          <p>Sparkling design to make a statement</p>
                        </div>
                      <div className='trend3'>
                          <img src={tc} alt='' />
                          <h4>Minimalist chic</h4>
                          <p>clean line and subtle accents for everyday style.</p>
                      </div>
                      
                      
                    </div>
                </div>
  )
}

export default Trend