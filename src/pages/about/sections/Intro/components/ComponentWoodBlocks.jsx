import React from "react";
import {Carousel} from '3d-react-carousal';
// var Coverflow = require('react-coverflow');
import img_1 from './wood_blocks/1.png';
import img_2 from './wood_blocks/2.png';
import img_3 from './wood_blocks/3.png';
import img_4 from './wood_blocks/4.png';
import img_5 from './wood_blocks/5.png';
import img_6 from './wood_blocks/6.png';
import img_7 from './wood_blocks/7.png';
// import img_8 from './wood_blocks/8.png';
import img_9 from './wood_blocks/9.png';
import img_10 from './wood_blocks/10.png';
import img_11 from './wood_blocks/11.png';
import img_12 from './wood_blocks/12.png';
import img_13 from './wood_blocks/13.png';



// let img_6 = '../img/wood_blocks/6.png';
// let img_7 = '../img/wood_blocks/7.png';
// let img_8 = '../img/wood_blocks/8.png';
// let img_9 = '../img/wood_blocks/9.png';
// let img_10 = '../img/wood_blocks/10.png';
// let img_11 = '../img/wood_blocks/11.png';
// let img_12 = '../img/wood_blocks/12.png';
// let img_13 = '../img/wood_blocks/13.png';

let slides = [
  <img  src={img_1} alt="1" />,
  <img  src={img_2} alt="2" />  ,
  <img  src={img_3} alt="3" />  ,
  <img  src={img_4} alt="4" />  ,
  <img  src={img_5} alt="5" />  ,
  <img  src={img_6} alt="6" />  ,
  <img  src={img_7} alt="7" />  ,
  // <img  src={img_8} alt="8" />  ,
  <img  src={img_9} alt="9" />  ,
  <img  src={img_10} alt="10" />  ,
  <img  src={img_11} alt="11" />  ,
  <img  src={img_12} alt="12" />  ,
  <img  src={img_13} alt="13" />  
];

const ComponentWoodBlocks = props => {
    return (
      <div>
          <div className='sm:w-full mt-10 lg:w-9/12 lg:mt-60 lg:mx-24'>
            <Carousel slides={slides} autoplay={false} interval={1000} arrows={true}/>
          </div>
        </div>
    )
}

export default ComponentWoodBlocks;