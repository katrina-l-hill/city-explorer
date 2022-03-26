'use strict';

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherDay from './WeatherDay';

class Weather extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let weatherObjs = [];
    if (this.props.weatherData.length > 0) {
      weatherObjs = this.props.weatherData.map((item, index) =>
        <WeatherDay key={index} dayForecast={item} />
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
