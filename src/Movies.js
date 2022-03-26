'use strict';

import React from 'react';
import Movie from './Movie';
import 'bootstrap/dist/css/bootstrap.min.css';

class Movies extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let movieObjs = [];
    if (this.props.movieData.length > 0) {
      movieObjs = this.props.movieData.map((item, index) =>
        <Movie index={index} movie={item} />
      );
    }
    return (
      <>
        <div>
          {movieObjs}
        </div>
      </>
    );
  }
}

export default Movies;
