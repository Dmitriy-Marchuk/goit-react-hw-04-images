import { Component } from 'react';
import './_app.scss';
import {Searchbar} from './Searchbar/Searchbar';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {ImageGallery} from './ImageGallery/ImageGallery';
import getFetchCollection from "../services/getApi";
import ButtonLoadMore from './ButtonLoadMore/ButtonLoadMore';
import { Loader } from './Loader/Loader';
import Modal from './Modal/Modal';

export default class App extends Component {
  state = {
    searchName: '',
    loading: false,
    currentPage: 1,
    collection: [],
    error: null,
    totalHits: null,
    showModal: false,
  };

  componentDidUpdate(prevProps, prevState) {  
    const { searchName, currentPage } = this.state;

    if (prevState.searchName !== searchName ||
      prevState.currentPage !== currentPage) {
      this.setState({ loading: true });

      getFetchCollection({ searchName, currentPage })
        .then(data => { 
          this.setState((prevState) =>
          ({
            loading: false,
            collection: [...prevState.collection, ...data.hits],
            totalHits: data.totalHits,
          })
          )
        }
        )
        .catch(error=> this.setState({error}))
        .finally(() => {
          this.setState({ loading: false });
        });
    }
  };

  loadMore = () => {
    this.setState(prevState => ({
      currentPage: prevState.currentPage +1,
    }))
  }

  onSubmit = e => {
    e.preventDefault();
    const value = e.target.elements.searchBarInput.value;
    if (value.trim() === '') {
      return toast.error(`Wrong request! Write something!`);
    }
    if (value.trim() === this.state.searchName.trim()) {
      return toast.warning(`You have already entered this query, with name "${value}"!`);
    }

    this.setState({
      collection: [],
      searchName: value,
      currentPage: 1,
      totalHits: null,
      showModal: false,
    });
    e.target.reset();
  };


  render() {
    const { collection, loading, currentPage, totalHits, showModal } = this.state;
    const totalPages = totalHits / 12;
      return (
        <div className='App'> 
          <Searchbar onSubmit={this.onSubmit} searchName={this.searchName} />
          <ImageGallery collection={collection} />
          {loading && <Loader/>}
          {totalPages > currentPage && <ButtonLoadMore onClick={this.loadMore} />}
          <ToastContainer autoClose={2000} />
        </div>
  );
  }
};

