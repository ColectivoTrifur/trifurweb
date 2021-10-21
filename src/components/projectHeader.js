import React from "react";
import { Sprite, Text, Stage, Container } from '@inlet/react-pixi'

import Circles from './circles.js';

const ProjectHeader = () => {
  const styles = {
    mixBlendMode:"overlay",
    opacity:".78",
    fill:"url(#a)"
  };
  return (
    <div>
      <h1>Inbipeda</h1>
      <p>Experiencia vibracional</p>
      <p>Noviembre 2021</p>
      <Stage width={1500} height={1050} options={{ backgroundAlpha: 0 }}>
          <Container x={300} y={300}>

              <Circles/>
            </Container>
    </Stage>
    <div className='gradient-circles'>
        <svg viewBox="0 0 178.97 178.97">
          <defs>
            <radialGradient id="a" cx="89.48" cy="89.48" r="89.48" gradientUnits="userSpaceOnUse">
              <stop offset=".03" stop-color="#6fc7b2" stop-opacity=".65"/>
              <stop offset=".15" stop-color="#909da9" stop-opacity=".73"/>
              <stop offset=".3" stop-color="#b172a0" stop-opacity=".81"/>
              <stop offset=".45" stop-color="#cb5099" stop-opacity=".87"/>
              <stop offset=".59" stop-color="#de3894" stop-opacity=".91"/>
              <stop offset=".72" stop-color="#e92a91" stop-opacity=".94"/>
              <stop offset=".84" stop-color="#ed2590" stop-opacity=".95"/>
              <stop offset="1" stop-color="#cb1c68" stop-opacity="0"/>
            </radialGradient>
          </defs>
          <g style={{isolation:"isolate"}}>
            <circle cx="89.48" cy="89.48" r="89.48" style={styles} />
          </g>
        </svg>
      </div>
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
      <div>0-0-0-0-0-0-0</div>
    </div>
  );
};

export default ProjectHeader;
