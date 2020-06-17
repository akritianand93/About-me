import React from 'react';
import './Title.css';
    const Title =({title,titleStyle})=> {
        return <div className={titleStyle}>{title}</div>
    };
export default Title;