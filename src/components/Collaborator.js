import React from "react";

const Collaborators = ({ who, what }) => {
  return (
    <div className="collaborator bottom">
      <p className="bottom-s">
        <span className="who">{who}: </span>
        {what}
      </p>
      <a href="">+info</a>
    </div>
  );
};

export default Collaborators;
