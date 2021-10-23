import React from "react";

const GalleryItem = ({ source, altText }) => {
  return (
    <div className="gallery-item">
      <img src={source} alt={altText} />
    </div>
  );
};

export default GalleryItem;
