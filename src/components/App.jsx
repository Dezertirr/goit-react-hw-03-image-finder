import React, { Component } from 'react';
import { getSearchPhotoAPI } from './APIservice/APIService.js';
import SearchBar from './SearchBar/SearchBar.jsx';

import ImageGallery from './ImageGallery/ImageGallery.jsx';
import LoadMore from './LoadMore/LoadMore.jsx';
import CustomLoader from './Loader/Loader.jsx';
import 'simplelightbox/dist/simple-lightbox.min.css';



export class App extends Component {
  state = {
    search: '',
    images: [],
    query: '',
    isSubmitted: false,
    page: 1,
    per_page: 0,
    totalHits: null,
    isLoading: false,
    scrollPosition: 0, 
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      this.setState({ isLoading: true }); 

      const response = await getSearchPhotoAPI(this.state.query);

      this.setState({
        isSubmitted: true,
        images: response.hits,
        totalHits: response.totalHits,
        isLoading: false, 
      });
    } catch (error) {
      console.error(error);
      this.setState({ isLoading: false }); 
    }
  };

  loadMoreButton = async (evt) => {
    evt.preventDefault();
    try {
      this.setState({}); 

      const response = await getSearchPhotoAPI(this.state.query, this.state.page + 1);
      this.setState((prevState) => ({
        images: [...prevState.images, ...response.hits],
        page: prevState.page + 1,
      }));
    } catch (error) {
      console.error(error);
      this.setState({ isLoading: false }); 
    }
  };

  handleChange = (evt) => {
    this.setState({ query: evt.target.value });
  };

  render() {
    const { images, query, isSubmitted, isLoading } = this.state;

    return (
      <div>
        <SearchBar query={query} handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
        {isLoading ? (
          <CustomLoader />
        ) : (
          <ImageGallery images={images} isSubmitted={isSubmitted} />
        )}
        {this.state.images.length > 0 && this.state.images.length + 1 <= this.state.totalHits && (
          <LoadMore loadMoreButton={this.loadMoreButton}></LoadMore>
        )}
      </div>
    );
  }
}
