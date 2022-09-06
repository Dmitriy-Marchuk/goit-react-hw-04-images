import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import './_imageGallery.scss';

const ImageGallery = ({ collection }) => {
  // console.log(collection);
  return (
    <ul className="ImageGallery">
      {collection.map(collect => (
        <ImageGalleryItem
          webformatURL={collect.webformatURL}
          largeImageURL={collect.largeImageURL}
          tags={collect.tags}
          key={collect.id}
        />
      ))}
    </ul>
  );
};
export default ImageGallery;
