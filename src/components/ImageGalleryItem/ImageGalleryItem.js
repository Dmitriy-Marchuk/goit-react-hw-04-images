import React from 'react';
import './_imageItem.scss';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ webformatURL, tags, largeImageURL, showModal }) => {
  return (
    <img
      alt={tags}
      className="ImageGalleryItem-image"
      width="48px"
      height="48px"
      src={webformatURL}
      onClick={() => showModal({ largeImageURL, tags })}
    />
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  showModal: PropTypes.func.isRequired,
};
