import React from "react";

import Gradient from './gradient.js';
import LogoCircle from './logoCircle.js';
import './identity.css';

const Identity = () => {


 
    return (
        <div>
        <Gradient cx="89.48" opacity=".28" color0="#fffff0" color1="#e92a91"/>
        <Gradient cx="150.50" opacity=".78" color0="#000ff0" color1="#002a91"/>
        <LogoCircle />
    </div>
    );
};
export default Identity;
