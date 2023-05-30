// ImageGallery.jsx
import React, { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

class ImageGallery extends Component {
  render() {
    const { images, isSubmited } = this.props;

    return (
      <ul className="gallery">
        {isSubmited && images.map((image) => (
          <ImageGalleryItem key={image.id} image={image} />
        ))}
      </ul>
    );
  }
}

export default ImageGallery;

