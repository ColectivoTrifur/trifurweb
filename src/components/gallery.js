import React from "react";
import GalleryItem from "./GalleryItem";

const Gallery = () => {
  return (
    <div className="gallery sides">
      <h2 className="bottom">Registros</h2>
      <div className="grid">
        <GalleryItem
          source="assets/rectangle-holder.png"
          altText="alternative"
        />
      </div>
    </div>
  );
};

export default Gallery;
