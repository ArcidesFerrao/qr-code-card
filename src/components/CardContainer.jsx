import React from 'react';
import imageCode from '../images/image-qr-code.png';

export default function CardContainer() {
  return (
    <div className='card-container'>
        <div className="image-code">
            <img src={imageCode} alt="qr-code" />
        </div>

        <div className="content">
            <div className="title">
                <h1>Improve your front-end skills by building projects</h1>
            </div>
            <div className="description">
                <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
            </div>
        </div>
    </div>
  )
}
