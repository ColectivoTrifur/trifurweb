import React from "react";
import image from "../assets/rectangle-holder.png";

import GalleryItem from "./GalleryItem";

const Documentation = () => {
  return (
    <div className="gallery sides bottom-l">
      <h2 className="bottom">Registros</h2>
      <div className="grid">
        <GalleryItem source={image} altText="alternative" />
      </div>
    </div>
  );
};

export default Documentation;
