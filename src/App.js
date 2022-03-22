// import logo from './logo.svg';
import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityData: [],
      error: false,
      errorMessage: '',
      map: ''
    }
  }
  handleCityInput = (event) => {
    this.setState({
      city: event.target.value
    })
  }
  //query string format: http://somesite.com?key=value&key2=value&key3=value

  getCityData = async (event) => {
    event.preventDefault();
    try {
      // get the data from the API
      let cityData = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`);

      // save that data into state
      this.setState({
        cityData: cityData.data,
      
      });
      console.log(this.state.cityData);
      let mapPng = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.state.cityData[0].lat},${this.state.cityData[0].lon}&zoom=14`;
      console.log(mapPng);
      this.setState({
          map: mapPng
      })
    } catch (error) {
      // console.log(error);
      this.setState({
        error: true,
        errorMessage: `An error has occured: ${error.response.status}`
      });
    }
  };
  render() {
    // console.log('map render',this.state.map);
    let cityDataListItems = this.state.cityData.map((city, index) => <li key={index}>{city.display_name}</li>);
    return (
      <>
        <h1>Data from API</h1>
        <form onSubmit={this.getCityData}>
          <label>Pick a City:
            <input type='text' onInput={this.handleCityInput} />
            <button type="submit">Explore!</button>
          </label>
        </form>
        <img src={this.state.map} alt="Map of Seattle"/> 
        {this.state.error
          ?
          <p>{this.state.errorMessage}</p>
          :
          <ul>
            {cityDataListItems}
          </ul>
        }
      </>
    );
  }
}

export default App;
