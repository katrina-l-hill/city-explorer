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
          <div>Forecast date: {item.date}</div><div>Weather description: {item.description}</div>
        </div>
      );
    }
    return (
      <>
        {weatherObjs}
      </>
    );
  }
}

export default Movie;
