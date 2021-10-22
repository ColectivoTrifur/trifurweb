
import React from "react";
const Gradient = (props) => {
    const styles = {
      mixBlendMode:"overlay",
      opacity:props.opacity,
      fill:"url(#a)"
    };
    return(

        <div className='gradient-circles'>
            <svg viewBox="0 0 178.97 178.97">
              <defs>
                <radialGradient id="a" cx={props.cx} cy={props.cx} r={props.cx} gradientUnits="userSpaceOnUse">
                  <stop offset=".03" stop-color="#6fc7b2" stop-opacity=".65"/>
                  <stop offset=".15" stop-color="#909da9" stop-opacity=".73"/>
                  <stop offset=".3" stop-color="#b172a0" stop-opacity=".81"/>
                  <stop offset=".45" stop-color="#cb5099" stop-opacity=".87"/>
                  <stop offset=".59" stop-color="#de3894" stop-opacity=".91"/>
                  <stop offset=".72" stop-color={props.color1} stop-opacity=".94"/>
                  <stop offset=".84" stop-color={props.color0} stop-opacity=".95"/>
                  <stop offset="1" stop-color="#cb1c68" stop-opacity="0"/>
                </radialGradient>
              </defs>
              <g style={{isolation:"isolate"}}>
                <circle cx="89.48" cy="89.48" r="89.48" style={styles} />
              </g>
            </svg>
       </div>

    )
}
export default Gradient;
