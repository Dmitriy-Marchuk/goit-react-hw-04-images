import { useEffect, useState } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import './_imageGallery.scss';
import '../ImageGalleryItem/_imageItem.scss';
import Modal from 'components/Modal/Modal';
import PropTypes from 'prop-types';
import getFetchCollection from 'services/getApi';
import { Loader } from 'components/Loader/Loader';
import ButtonLoadMore from 'components/ButtonLoadMore/ButtonLoadMore';
import { toast } from 'react-toastify';

const ImageGallery = searchName => {
  const [query, setQuery] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [tags, setTags] = useState('');
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [collection, setCollection] = useState([]);
  const [error, setError] = useState(null);
  const [totalHits, setTotalHits] = useState(null);

  const totalPages = totalHits / 12;

  useEffect(() => {
    if (searchName !== query) {
      setCollection([]);
    }
    setQuery(searchName);
  }, [searchName, query]);

  useEffect(() => {
    if (!query) {
      return;
    }

    setLoading(true);

    getFetchCollection(searchName, currentPage)
      .then(data => {
        setCollection(prevHits => [...prevHits, ...data.hits]);
        setLoading(false);
        setTotalHits(data.totalHits);
        if (!data.totalHits) {
          return toast.error(`Wrong request! Write something!`);
        }
      })
      .catch(error => setError({ error }))
      .finally(() => {
        setLoading(false);
      });
  }, [searchName, query, currentPage]);

  const showModalFunc = ({ largeImageURL, tags }) => {
    setShowModal(true);
    setLargeImageURL(largeImageURL);
    setTags(tags);
  };

  const closeModal = () => {
    setShowModal(false);
    setLargeImageURL('');
    setTags('');
  };

  const loadMore = () => {
    setCurrentPage(state => state + 1);
  };

  return (
    <>
      <ul className="ImageGallery">
        {loading && <Loader />}
        {error && <h1> {error} </h1>}
        {collection.map(collect => (
          <li key={collect.id} className="ImageGalleryItem">
            <ImageGalleryItem
              webformatURL={collect.webformatURL}
              largeImageURL={collect.largeImageURL}
              tags={collect.tags}
              showModal={showModalFunc}
            />
          </li>
        ))}
      </ul>
      {totalPages > currentPage && <ButtonLoadMore onClick={loadMore} />}
      {showModal && (
        <Modal
          largeImageURL={largeImageURL}
          tags={tags}
          closeModal={closeModal}
        />
      )}
    </>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  imageGallery: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ),
};
