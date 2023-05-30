import React, { Component } from "react";

class LoadMore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
    };
  }



  render() {
    return (
      <button type="submit" onClick={this.props.loadMoreButton}>
        Load More
      </button>
    );
  }
}

export default LoadMore;
