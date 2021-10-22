import React from "react";

import Gradient from './gradient.js';
import LogoCircle from './logoCircle.js';
import './identity.css';

const Identity = () => { 
    return (
        <svg style={{mixBlendMode:"soft-light"}} >
            <Gradient cx="89.48" opacity=".9" color0="#000ff0" color1="#000ff0" offset=".92"/>
            <LogoCircle />
        </svg>
    );
};
export default Identity;
