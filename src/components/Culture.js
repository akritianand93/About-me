import React from 'react';
import Title from './Title.js';
import Subtitle from './Subtitle.js';
import CardWrapper from './CardWrapper.js';
import Holi from "./../Images/Holi.jpg";



const IntroPage = () => {
    return(
        <div>
            <Title intro = "Culture"/>
            <CardWrapper
                image = {Holi}
                title='Holi the festival of colors'
                caption='Holi the festival of colors'
                description="Something about Holi"/>
        </div>
    )};
export default IntroPage;