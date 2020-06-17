import React from 'react';
import Title from './Title.js';
import './Introduction.css';

const IntroPage=({imageStyles,quotePosition,quote,quoteStyle,children})=> {
    return(
        <div className={imageStyles} >
        {children}
            <div className={quotePosition}>
                <Title title={quote} titleStyle={quoteStyle}/>
            </div>
        </div>
    )};
export default IntroPage;

