import React, { useEffect, useRef, useState } from 'react';
import { useQRCode } from 'next-qrcode'

// import imageCode from '../images/image-qr-code.png';

export default function CardContainer() {
    const { SVG } = useQRCode();
    const inputRef = useRef(null);
    const [phrase, setPhrase] = useState("");
    
    useEffect(() => {
        inputRef.current.focus();
      }, [])

  return (
    <div className='card-container'>
        <div className="image-code">
            <SVG 
                text={phrase==="" ? "new" : phrase}
                options={{
                    margin: 2,
                    width: 300,
                    color: {
                        dark: '#141414',
                        light: '#f4f5fa',
                    },
                }}
            />
        </div>

        <div className="content">
            <div className="title">
                <h1>Improve your front-end skills by building projects</h1>
            </div>
            <div className="description">
                <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
            </div>
        </div>

        <div className="container">
            <input 
                type="text" 
                name='phrase'
                placeholder='input phrase here...'
                value={phrase} 
                onChange={(e) => setPhrase(e.target.value)} 
                ref={inputRef}
            />
        </div>
    </div>
  )
}
