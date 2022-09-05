import React from 'react';
import './_imageItem.scss';

const ImageGalleryItem = ({ webformatURL, tags, largeImageURL, id }) => {
  return (
    <li key={id} className="ImageGalleryItem">
      <img
        alt={tags}
        className="ImageGalleryItem-image"
        width="48px"
        height="48px"
        src={webformatURL}
      />
    </li>
  );
};

export default ImageGalleryItem;
