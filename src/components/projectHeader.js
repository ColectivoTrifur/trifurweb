import React from "react";

const ProjectHeader = () => {
  return (
    <div>
      <h1>Inbipeda</h1>
      <p>Experiencia vibracional</p>
      <p>Noviembre 2021</p>
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
      <div>0-0-0-0-0-0-0</div>
    </div>
  );
};

export default ProjectHeader;
