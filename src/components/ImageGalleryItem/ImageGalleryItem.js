import React from "react";

import s from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({images, handleOpenModal}) => {
  return (
    images.map(({ id, webformatURL, largeImageURL, tags }) => (
      <li
        key={id}
        className={s.ImageGalleryItem}
        onClick={handleOpenModal}
      >
        <img
          src={webformatURL}
          data-source={largeImageURL}
          data-alt={tags}
          alt={tags}
          className={s.ImageGalleryItem_image}
        />
      </li>
    )) 
  );
};

export default ImageGalleryItem;