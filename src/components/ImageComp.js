import React from 'react';
import "./Image.css";

    const ImageComp = (props) => {
        return <img src = {props.src} alt = "slide-img" className = 'image'></img>
    };

export default ImageComp;