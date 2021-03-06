// import logo from './logo.svg';
import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios';
import Weather from './Weather';
import Movies from './Movies';
//import { isCompositeComponentWithType } from 'react-dom/test-utils';
// var express = require('express');
// var cors = require('cors');
// var app = express();

// app.use(cors());


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityData: [],
      error: false,
      errorMessage: '',
      map: '',
      weatherData: [],
      movieData: [],
      debug: true // This is a workaround due to running out of API calls while trying to get lat, lon, and Weather.js task completed.
    };
  }
  handleCityInput = (event) => {
    this.setState({
      city: event.target.value
    });
  };
  getCityData = async (event) => {
    event.preventDefault();
    try {
      // get the data from the API
      let cityData = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`);

      // save that data into state
      this.setState({
        cityData: cityData.data,
      });

      let mapPng = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.state.cityData[0].lat},${this.state.cityData[0].lon}&zoom=14`;

      this.setState({
        map: mapPng
      });
      //call to the weather service and get the forecasts to display in a react component
      let weatherApiUrl = `${process.env.REACT_APP_SERVER}/weather?lat=${cityData.data[0].lat}&lon=${cityData.data[0].lon}`;
      console.log(weatherApiUrl);
      let forecastData = await axios.get(weatherApiUrl);
      console.log(forecastData);
      this.setState({
        weatherData: forecastData.data
      });
    }
    catch (error) {
      this.setState({
        error: true,
        errorMessage: `An error has occured: ${error.response.status}`
      });
    }
    try {
      //call to TMDB and get the movies to display in a react component
      let movieApiUrl = `${process.env.REACT_APP_SERVER}/movies?city_name=${this.state.city}`;
      let movieSiteData = await axios.get(movieApiUrl);
      this.setState({
        movieData: movieSiteData.data
      });
    }
    catch (error) {
      this.setState({
        error: true,
        errorMessage: `An error has occured: ${error.response.status}`
      });
    }
  };

  render() {

    let cityDataListItems = this.state.cityData.map((city, index) => <li key={index}>{city.display_name}</li>);
    return (
      <>
        <h1>Data from API</h1>
        <form onSubmit={this.getCityData}>
          <label>Type the name of a City:
            <input type='text' onInput={this.handleCityInput} />
            <button type="submit">Explore!</button>
          </label>
        </form>
        <img src={this.state.map} alt="Map" />
        {this.state.error
          ?
          <p>{this.state.errorMessage}</p>
          :
          <ul>
            {cityDataListItems}
          </ul>
        }
        <Weather weatherData={this.state.weatherData} />
        <Movies movieData={this.state.movieData} />
      </>
    );
  }
}

export default App;
