'use strict';

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Movie extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div key={this.props.index}>
          <img src={'https://image.tmdb.org/t/p/w500' + this.props.movie.poster_path} alt={this.props.movie.title} />
          <div>Title: {this.props.movie.title}</div>
          <div>Release Date: {this.props.movie.release_date}</div>
          <div>Movie Overview: {this.props.movie.overview}</div>
          <div>Average Viewer Votes: {this.props.movie.vote_average}</div>
          <div># of Votes: {this.props.movie.vote_count}</div>
          <div>Genre: {this.props.movie.genre_ids}</div>
        </div>
      </>
    );
  }
}

export default Movie;
