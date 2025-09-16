import React from 'react';
import './gallery.css';
import ta from '../../assets/ta.jpg';
import tb from '../../assets/tb.jpg';
import tc from '../../assets/tc.jpg';
import f1 from '../../assets/f1.jpg';
import f2 from '../../assets/f2.jpg';
import f3 from '../../assets/f3.jpg';

const Gallery = () => {
  return (
    <div className='gallerysection'>
        <h1>Gallery</h1>
        <div className='gallerycard'>
            <img src={ta} alt='' />
            <img src={tb} alt='' />
            <img src={tc} alt='' />
            <img src={f1} alt='' />
            <img src={f2} alt='' />
            <img src={f3} alt='' />
            <img src={tb} alt='' />
        </div>
    </div>
  )
}

export default Gallery