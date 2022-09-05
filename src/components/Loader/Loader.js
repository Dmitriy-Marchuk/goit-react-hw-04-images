import { Circles } from 'react-loader-spinner';
import './_loader.scss';

export const Loader = () => {
  return (
    <div className="loader-container">
      <Circles
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};
