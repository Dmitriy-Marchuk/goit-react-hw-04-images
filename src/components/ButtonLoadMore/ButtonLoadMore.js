import './_buttonLoadMore.scss';

const ButtonLoadMore = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick} className="Button">
      Load more
    </button>
  );
};

export default ButtonLoadMore;
