import './_buttonLoadMore.scss';
import PropTypes from 'prop-types';

const ButtonLoadMore = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick} className="Button">
      Load more
    </button>
  );
};

export default ButtonLoadMore;

ButtonLoadMore.propTypes = {
  onClick: PropTypes.func.isRequired,
};
