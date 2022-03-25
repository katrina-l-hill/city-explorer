'use strict';

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Movie extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let movieObjs = [];
    if (this.props.movieData.length > 0) {
      movieObjs = this.props.movieData.map((item, index) =>
        <div key={index}>
          <img src={'https://image.tmdb.org/t/p/w500' + item.poster_path} alt={item.title} />
          <div>Title: {item.title}</div>
          <div>Movie Overview: {item.overview}</div>
        </div>
      );
    }
    return (
      <>
        {movieObjs}
      </>
    );
  }
}

export default Movie;
