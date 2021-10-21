import React from "react";
import './identity.css';
import { Sprite, Text, Stage, Container } from '@inlet/react-pixi'
import Circles from './circles.js';
import Gradient from './gradient.js';

const Identity = () => {


 
    return (
        <div>
        <Gradient opacity=".78" color="#fffff0"/>
        <Gradient opacity=".18" color="#000ff0"/>
       <div className="logo-circle">
           <svg viewBox="0 0 500 500">

           <path id="curve" fill="transparent"
                 d="
                 M 100, 100
                 m -75, 0
                 a 75,75 0 1,0 150,0
                 a 75,75 0 1,0 -150,0
                 "
           />
           <text width="500">
             <textPath alignment-baseline="top" xlinkHref="#curve">
               Inbipeda - Inbipeda - Inbipeda - Inbipeda - Inbipeda - Inbipeda -
             </textPath>
           </text>
         </svg>
       </div>
    </div>
    );
};
export default Identity;
