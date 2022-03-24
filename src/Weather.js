'use strict';

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Weather extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let weatherObjs = [];
    if (this.props.weatherData.length > 0) {
      weatherObjs = this.props.weatherData.map((item, index) =>
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

export default Weather;
