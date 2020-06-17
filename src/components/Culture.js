import React from 'react';
import Title from './Title.js';
import Subtitle from './Subtitle.js';
import CardWrapper from './CardWrapper.js';
import RangoliDiwali from "./../images/RangoliDiwali.jpg";
import GanpatiRangoli from "./../images/GanpatiRangoli.jpg";
import Christmas from "./../images/Christmas.jpg";
import Thanksgiving from "./../images/Thanksgiving1.jpg";
import ApplePicking from "./../images/ApplePicking.jpg";

const Culture=()=> {
    return(
        <div>
            <Title intro="Culture" titleStyle="font-style"/>
            <CardWrapper
                image={RangoliDiwali}
                title='Sand Art made during Diwali - A festival of lights'
                caption='Sand Art made during Diwali - A festival of lights'
                />
            <CardWrapper
                image={GanpatiRangoli}
                title='Sand Art made during Ganpati - A deity worshipped in India '
                caption='Sand Art made during Ganpati - A deity worshipped in India'
                />
            <CardWrapper
                 image={Christmas}
                 title='Christmas Celebration'
                 caption='Christmas Celebration'
                />
            <CardWrapper
                 image={Thanksgiving}
                 title='Thanksgiving *Burp*'
                 caption='Thanksgiving *Burp*'
                 />
            <CardWrapper
                 image={ApplePicking}
                 title='Apple Picking at Larryland Farms, MD'
                 caption='Apple Picking at Larryland Farms, MD'
                />
        </div>
    )};
export default Culture;