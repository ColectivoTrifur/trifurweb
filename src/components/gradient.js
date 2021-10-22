
import React from "react";
const Gradient = (props) => {
    const styles = {
      opacity:props.opacity,
      fill:"url(#a)"
    };
    return(

            <svg viewBox="0 0 178.97 178.97" id="gradient-circles">
              <defs>
                <radialGradient id="a" cx={props.cx} cy={props.cx} r={props.cx} gradientUnits="userSpaceOnUse">
                  <stop offset=".03" stopColor="#6fc7b2" stopOpacity=".65"/>
                  <stop offset=".15" stopColor="#909da9" stopOpacity=".73"/>
                  <stop offset=".3" stopColor="#b172a0" stopOpacity=".81"/>
                  <stop offset=".45" stopColor="#cb5099" stopOpacity=".87"/>
                  <stop offset=".59" stopColor="#de3894" stopOpacity=".91"/>
                  <stop offset={props.offset} stopColor={props.color1} stopOpacity=".94"/>
                  <stop offset=".84" stopColor={props.color0} stopOpacity=".95"/>
                  <stop offset="1" stopColor="#cb1c68" stopOpacity="0"/>
                </radialGradient>
              </defs>
              <g style={{isolation:"isolate"}}>
                <circle cx={props.cx} cy={props.cx} r={props.cx} style={styles} />
              </g>
            </svg>

    )
}
export default Gradient;
