import React from "react";

import Gradient from './gradient.js';
import LogoCircle from './logoCircle.js';
import './identity.css';

const Identity = () => { 
    return (
        <svg style={{mixBlendMode:"screen"}} >
            <Gradient cx="89.48" opacity=".9" offset=".82"/>
            <LogoCircle />
        </svg>
    );
};
export default Identity;
