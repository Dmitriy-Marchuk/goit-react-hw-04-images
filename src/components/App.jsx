import { useState } from 'react';
import './_app.scss';
import {Searchbar} from './Searchbar/Searchbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageGallery from './ImageGallery/ImageGallery';

const App = () => {
  const [searchName, setSearchName] = useState('');

  const onSubmit = nameQuery => {
    setSearchName(nameQuery);
  };


  return (
        <div className='App'> 
          <Searchbar onSubmit={onSubmit} searchName={searchName} />
          <ImageGallery searchName={searchName} />
          <ToastContainer autoClose={2000} />
      </div>
  );
};

export default App;