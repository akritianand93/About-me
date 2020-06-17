import React from 'react';
import Title from './Title.js';
import Subtitle from './Subtitle.js';
import CardWrapper from './CardWrapper.js';
import Khowsuey from "./../images/Khowsuey.jpg";
import Noodles from "./../images/Food2.jpg";
import Samosey from "./../images/Samosey.jpg";
import Coffee from "./../images/Dalgona Coffee.jpg";
import CornRice from "./../images/CornRice.jpg";
import Chaat from "./../images/Chaat.jpg";
import RotiSabji from "./../images/RotiSabji.jpg";


const Food=()=> {
    return(
        <div>
            <Title intro="Culture" titleStyle="font-style"/>
            <CardWrapper
                image={Khowsuey}
                title='Home made Burmese Khow suey'
                caption='Home made Burmese Khow suey'
               />
            <CardWrapper
                 image={Samosey}
                 title='Indian snacks - Samosa'
                 caption='Indian snacks - Samosa'
                 />
            <CardWrapper
                 image={Coffee}
                 title='The famous "Dalgona Coffee"'
                 caption='The famous "Dalgona Coffee"'
                 />
            <CardWrapper
                 image={CornRice}
                 title='Corn Rice in Baking'
                 caption='Corn Rice in Baking'
                 />
            <CardWrapper
                image={Noodles}
                title='Chinese Noodles Indian style with Manchurian Gravy'
                caption='Chinese Noodles Indian style with Manchurian Gravy'
                />
            <CardWrapper
                image={Chaat}
                title='My all time favorite Indian Savory, Chaat'
                caption='My all time favorite Indian Savory, Chaat'
               />
            <CardWrapper
                image={RotiSabji}
                title='Staple Indian Diet - Roti SAbji'
                caption='Staple Indian Diet - Roti SAbji'
               />
        </div>
    )};
export default Food;