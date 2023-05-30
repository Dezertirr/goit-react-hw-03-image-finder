import React, { Component } from 'react';
import {getSearchPhotoAPI} from './APIservice/APIService.js'
import SearchBar from './SearchBar/SearchBar.jsx';
import ImageGallery from './ImageGallery/ImageGallery.jsx'; 
import LoadMore from './LoadMore/LoadMore.jsx'

export class App extends Component {
  state = {
    search: '',
    images: [],
    query: '',
    isSubmitted: false,
    page: 1, 
  };
  

  handleSubmit = async (evt) => {
    evt.preventDefault();
   
    try {
      const response = await getSearchPhotoAPI(this.state.query)
      this.setState({isSubmited:true, images: response.hits})
    } catch (error) {
      
    }
};

loadMoreButton = async (evt) => {
  evt.preventDefault();
  
  try {
    const response = await getSearchPhotoAPI(this.state.query, this.state.page + 1); 
    this.setState((prevState) => ({
      images: [...prevState.images, ...response.hits],
      page: prevState.page + 1,
      if(){

      }
    }));
  } catch (error) {
    console.error(error);
  }
};

  handleChange = (evt) => {
    this.setState({ query: evt.target.value })
    }



  render() {
    const { images, query, isSubmited } = this.state;

    return (
      <div>
        <SearchBar query={query} handleSubmit={this.handleSubmit} handleSearch={this.handleSearch} handleChange={this.handleChange} />
        <ImageGallery images={images} isSubmited={isSubmited} /> 
        {images.length > 0 && (
        <LoadMore loadMoreButton = {this.loadMoreButton}>
        </LoadMore>)}
      </div>
    );
  }
}
