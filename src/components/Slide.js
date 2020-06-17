import React from 'react';
import './Slide.css';

    const Slide=({content, transX, currContent})=> {
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

//import React, { useState, useEffect } from 'react';
//import './Slide.css';
//const Slide=({content, transX, activeIndex})=> {
//  const [slides, setSlides] = useState(content);
//  useEffect(() => {
//    if(activeIndex > slides.length-1){
//      setSlides([
//        ...slides,
//        content[activeIndex % content.length - 1]
//      ])
//    }
//  }, [activeIndex]);
//  console.log("translateX by ", transX);
//  return(
//    slides.map((item,index)=>{
//      return(
//        <div key={index} className="slide" style={{transform:`${transX}`}}>
//      {item}
//    </div>
//    )
//    })
//  )
//};
//export default Slide;