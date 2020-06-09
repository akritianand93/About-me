import React from 'react';
import './Title.css';
    const Title =({intro,titleStyle})=> {
        return <h1 className={titleStyle}>{intro}</h1>
    };
export default Title;