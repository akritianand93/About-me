import React from 'react';
import './Slide.css';

    const Slide=({content, transX})=> {
    console.log("translateX by ", transX);
        return(
             content.map((item,index)=>{
                 return(
                    <div key={index} className="slide" style={{transform:`${transX}`}}>
                        {item}
                    </div>
                )
            })
        )
    };

export default Slide;