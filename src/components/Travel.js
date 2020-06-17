import React from 'react';
import Title from './Title.js';
import Subtitle from './Subtitle.js';
import CardWrapper from './CardWrapper.js';
import Travel1 from "./../images/Travel1.jpg";
import Philly from "./../images/Philly.jpg";
import NewYork from "./../images/NewYork.jpg";
import Seattle from "./../images/Seattle.jpg";
import Goa from "./../images/Goa.jpg";
import Virginia from "./../images/Virginia.jpg";
import DC from "./../images/DC.jpg";
import EastIndia from "./../images/Cherrapunjee.jpg";


const Travel=()=> {
    return(
        <div>

            <CardWrapper
                image={Travel1}
                title='Revdanda Beach Camping'
                caption='Revdanda Beach Camping'/>
            <CardWrapper
                image={Philly}
                title='Philladelphia,PA'
                caption='Philladelphia,PA'
                />
            <CardWrapper
                 image={NewYork}
                 title='The New York Skyline from Exchange Place'
                 caption='The New York Skyline from Exchange Place'
                 />
            <CardWrapper
                 image={Seattle}
                 title='Seattle'
                 caption='Seattle'
                 />
            <CardWrapper
                 image={Goa}
                 title='Go Goa Gone!'
                 caption='Go Goa Gone!'
                 />
            <CardWrapper
                 image={Virginia}
                 title='Virginia'
                 caption='Virginia'
                 />
            <CardWrapper
                 image={DC}
                 title='National Monument, Washington DC'
                 caption='National Monument, Washington DC'
                 />
            <CardWrapper
                 image={EastIndia}
                 title='A trip to Cherrapunjee, North East India'
                 caption='A trip to Cherrapunjee, North East India'
                 />
        </div>
    )};
export default Travel;