import React from 'react';
import './Arrow.css';

    const Arrow = ({direction,onClick}) => {
        return <span id= {direction+"_arrow"} className={"arrow "+ direction} onClick = {onClick}/>
    };

export default Arrow;