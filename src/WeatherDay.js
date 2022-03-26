'use strict';

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class WeatherDay extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div>Date: {this.props.dayForecast.date}</div>
        <div>Description: {this.props.dayForecast.description}</div>
      </>
    );
  }
}

export default WeatherDay;
