import React, { Component } from "react";
import styles from './LoadMore.module.css'

class LoadMore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
    };
  }



  render() {
    return (
      <button className={styles.LoadMoreBtn} type="submit" onClick={this.props.loadMoreButton}>
        Load More
      </button>
    );
  }
}

export default LoadMore;
