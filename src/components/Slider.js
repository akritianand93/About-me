import React, {useState} from 'react';
import Arrow from './Arrow.js';
import Slide from './Slide.js';

import ImageComp from './ImageComp.js';
import IntroPage from "./IntroPage.js";
import i1 from "./../Images/Holi.jpg";
import Culture from './Culture.js';

import './Slider.css';

 const Slider = () => {
    let contentArr =
    [
    <IntroPage/>,
    <ImageComp src = {i1}/>,
    <Culture/>,
    3,
    4,
    5
    ];

    const [currSlide,setCurrSlide] = useState(0);

    const previousClicked= ()=> {
        currSlide === 0 ? setCurrSlide(-(contentArr.length-1)) : setCurrSlide(currSlide + 1);


    }
    const nextClicked= ()=> {
        currSlide ===  (-(contentArr.length-1)) ? setCurrSlide(0) : setCurrSlide(currSlide - 1);
    }

    return (
        <div className='slider'>
            <Slide content={contentArr} transX={`translateX(${currSlide*100}%)`}/>
            <Arrow direction='back' onClick={previousClicked}/>
            <Arrow direction='next' onClick={nextClicked}/>
        </div>
    ) };
export default Slider;
