import React from 'react';
import "./Image.css";

    const ImageComp=({src})=> {
        return <img src={src} alt ="slide-img" className='image'></img>
    };

export default ImageComp;