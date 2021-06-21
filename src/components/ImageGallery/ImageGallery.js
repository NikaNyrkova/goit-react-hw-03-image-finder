import React from "react";

import ImageGalleryItem from "../ImageGalleryItem";

import s from "./ImageGallery.module.css";

const ImageGallery = ({images, handleOpenModal}) => {
  return (
    <ul className={s.ImageGallery} id="imageGallery">
      <ImageGalleryItem
        images={images}
        handleOpenModal={handleOpenModal}
      />
    </ul>
  );
};

export default ImageGallery;