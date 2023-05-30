import React, { Component } from 'react';

class ImageGalleryItem extends Component {
  render() {
    const { image } = this.props;

    return (
      <li>
        <img src={image.webformatURL} alt={image.title} />
      </li>
    );
  }
}

export default ImageGalleryItem;
