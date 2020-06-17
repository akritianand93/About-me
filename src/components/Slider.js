import React, {useState} from 'react';
import Arrow from './Arrow.js';
import Slide from './Slide.js';
import ImageComp from './ImageComp.js';
import IntroPage from "./IntroPage.js";
import i1 from "./../images/Holi.jpg";
import Culture from './Culture.js';
import Travel from './Travel.js';
import Food from './Food.js';
import Ribbon from './Ribbon.js';
import Title from './Title.js';
import './Slider.css';

const Slider=()=> {

    const [currSlide,setCurrSlide]=useState(0);

    const introClicked=()=> {
        setCurrSlide(0);
    }

    const travelClicked=()=> {
        setCurrSlide(-1);
    }
    const foodClicked=()=> {
        setCurrSlide(-3);
    }
    const cultureClicked=()=> {
        setCurrSlide(-5);
    }


    let contentArr=
    [
    <IntroPage
        imageStyles="introduction"
        quotePosition="intro__quote"
        quote='"Traveling exposes you to different food and cultures around the world"'
        quoteStyle="quote"><Title title="All About me" titleStyle="intro_title quote"/></IntroPage>,

    <IntroPage
        imageStyles="travel"
        quotePosition="travel__quote"
        quote='"Exploring different places brings positivity and fills me with peace and happiness"'
        quoteStyle="quote"><Title title="Travel" titleStyle="travel_title quote"/></IntroPage>,

    <Travel/>,

    <IntroPage
         imageStyles="food"
         quotePosition="food__quote"
         quote='"To eat or not to eat, is out of the question. Where there is food, you will find me!"'
         quoteStyle="quote"><Title title="Food" titleStyle="food_title quote"/></IntroPage>,

    <Food/>,

    <IntroPage
          imageStyles="culture"
          quotePosition="culture__quote"
          quote='"Unity in Diversity. Indian at heart, global in spirit!"'
          quoteStyle="quote"><Title title="Culture" titleStyle="culture_title quote"/></IntroPage>,

    <Culture/>
    ];

    const previousClicked=()=> {
      currSlide===0 ? setCurrSlide(-(contentArr.length-1)) : setCurrSlide(currSlide + 1);
      //setCurrSlide(currSlide - 1);
    }
    const nextClicked=()=> {
       currSlide===(-(contentArr.length-1)) ? setCurrSlide(0) : setCurrSlide(currSlide - 1);
       //setCurrSlide(currSlide + 1);
    }

    return (
        <div className='slider'>
            <Ribbon onClickIntro={introClicked} onClickTravel={travelClicked} onClickFood={foodClicked} onClickCulture={cultureClicked}/>
            <Slide content={contentArr} transX={`translateX(${currSlide*100}%)`} ></Slide>
            <Arrow direction='back' onClick={previousClicked}/>
            <Arrow direction='next' onClick={nextClicked}/>
        </div>
    )
};
export default Slider;
