import React from "react";
import Gallery from "react-grid-gallery";

const Gal = () => {
  const IMAGES = [
    {
      src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
      thumbnail:
        "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
      caption: "After Rain (Jeshu John - designerspics.com)",
    },
    {
      src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
      thumbnail:
        "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
      caption: "Boats (Jeshu John - designerspics.com)",
    },
    {
      src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
      thumbnail:
        "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
    },
  ];
  return (
    <div className="gallery sides bottom-l">
      <h2 className="bottom">Registros</h2>
      <Gallery enableImageSelection={false} images={IMAGES} />
    </div>
  );
};

export default Gal;