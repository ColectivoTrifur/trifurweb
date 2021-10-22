
import React, { useEffect, useState, useRef } from 'react';
import { Spring } from 'react-spring/renderprops';

const Logo = (props) => {
    return(
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
    );
}
export default Logo;
