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
        <div>{this.props.dayForecast.valid_date}</div>
        <div>{this.props.dayForecast.description}</div>
      </>
    );
  }
}

export default WeatherDay;
