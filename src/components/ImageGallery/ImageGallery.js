import { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import './_imageGallery.scss';
import Modal from 'components/Modal/Modal';
import PropTypes from 'prop-types';

export class ImageGallery extends Component {
  state = {
    showModal: false,
    largeImageURL: '',
    tags: '',
  };

  showModal = ({ largeImageURL, tags }) => {
    this.setState({
      showModal: true,
      largeImageURL: largeImageURL,
      tags: tags,
    });
  };

  closeModal = () => {
    this.setState({
      showModal: false,
      largeImageURL: '',
      tags: '',
    });
  };

  render() {
    const collection = this.props.collection;
    const { showModal } = this.state;

    return (
      <>
        <ul className="ImageGallery">
          {collection.map(collect => (
            <ImageGalleryItem
              webformatURL={collect.webformatURL}
              largeImageURL={collect.largeImageURL}
              tags={collect.tags}
              key={collect.id}
              showModal={this.showModal}
            />
          ))}
        </ul>
        {showModal && (
          <Modal
            largeImageURL={this.state.largeImageURL}
            tags={this.state.tags}
            closeModal={this.closeModal}
          />
        )}
      </>
    );
  }
}

ImageGallery.propTypes = {
  imageGallery: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ),
};
