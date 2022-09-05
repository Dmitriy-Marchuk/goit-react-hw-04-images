import { Component } from 'react';
import './_app.scss';
import {Searchbar} from './Searchbar/Searchbar';
import { ToastContainer } from 'react-toastify';
import ImageGallery from './ImageGallery/ImageGallery';
import getFetchCollection from "../services/getApi";
import ButtonLoadMore from './ButtonLoadMore/ButtonLoadMore';
import { Loader } from './Loader/Loader';

export default class App extends Component {
  state = {
    searchName: '',
    loading: false,
    currentPage: 1,
    collection: [],
    error: null,
    totalHits: null,
  };

  componentDidUpdate(prevProps, prevState) {  
    const { searchName, currentPage } = this.state;

    if (prevState.searchName !== searchName ||
      prevState.currentPage !== currentPage) {
      this.setState({ loading: true });

      getFetchCollection({ searchName, currentPage })
        .then(data => { 
          this.setState(prevState =>
          ({
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
    console.log(this.state.currentPage);
  }

  onSubmit = e => {
    e.preventDefault();
    const value = e.target.elements.searchBarInput.value;
    this.setState({
      collection: [],
      searchName: value,
      currentPage: 1,
      totalHits: null,
    });
    e.target.reset();
  };


  render() {
    const { collection, loading, currentPage, totalHits } = this.state;
    const totalPages = totalHits / 12;
    console.log(currentPage);
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
