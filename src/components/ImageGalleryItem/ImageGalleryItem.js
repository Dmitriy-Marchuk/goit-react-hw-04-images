import React from 'react';
import './_imageItem.scss';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({
  webformatURL,
  tags,
  largeImageURL,
  id,
  showModal,
}) => {
  return (
    <li key={id} className="ImageGalleryItem">
      <img
        alt={tags}
        className="ImageGalleryItem-image"
        width="48px"
        height="48px"
        src={webformatURL}
        onClick={() => showModal({ largeImageURL, tags })}
      />
    </li>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  id: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  showModal: PropTypes.func.isRequired,
};
