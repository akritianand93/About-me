import React, {useState} from 'react';
import Slider from './Slider.js';
import Ribbon from './Ribbon.js';

const AboutMe=()=> {

    const [currSlide,setCurrSlide]=useState(0);

    const travelClicked=()=> {
        setCurrSlide(-1);
    }
    const foodClicked=()=> {
        setCurrSlide(-2);
    }
    const cultureClicked=()=> {
        setCurrSlide(-3);
    }

    const previousClicked=()=> {
      currSlide===0 ? setCurrSlide(-(contentArr.length-1)) : setCurrSlide(currSlide + 1);
      //setCurrSlide(currSlide - 1);
    }
    const nextClicked=()=> {
       currSlide===(-(contentArr.length-1)) ? setCurrSlide(0) : setCurrSlide(currSlide - 1);
       //setCurrSlide(currSlide + 1);
    }

    return (
        <Ribbon/>
        <Slider/>
    )
};
export default AboutMe;
