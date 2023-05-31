import React, { Component } from 'react';
import SimpleLightbox from 'simplelightbox';
import styles from './ImageGalleryItem.module.css'

class ImageGalleryItem extends Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
    this.lightbox = null;
  }

  componentDidMount() {
    this.lightbox = new SimpleLightbox(this.imageRef.current, { showCounter: false });
  }

  componentWillUnmount() {
    if (this.lightbox) {
      this.lightbox.destroy();
    }
  }

  render() {
    const { image } = this.props;

    return (
      <li className={styles.GalleryItem}>
        <a href={image.largeImageURL} ref={this.imageRef} width={100}>
          <img src={image.webformatURL} alt={image.title} className={styles.GalleryItemImg}  />
        </a>
      </li>
    );
  }
}

export default ImageGalleryItem;

