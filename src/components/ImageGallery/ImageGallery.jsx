
import React, { Component } from 'react';

import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css'
import { nanoid } from 'nanoid';

class ImageGallery extends Component {
  render() {
    const { images, isSubmitted } = this.props;

    return (
      <ul className={styles.gallery}>
        {isSubmitted && images.map((image) => (
  <ImageGalleryItem key={nanoid()} image={image} />
))}

      </ul>
    );
  }
}

export default ImageGallery;

