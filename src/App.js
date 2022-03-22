// import logo from './logo.svg';
import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityData: {},
      error: false,
      errorMessage:''
    }
  }

  handleCityInput = (event) => {
    this.setState({
      city: event.target.value
    })
  }

  getCityData = async (event) => {
    event.preventDefault();
    try {
      // get the data from the API
      let cityData = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`);
      // save that data into state
      this.setState({
        cityData: cityData.data.results
      });
    } catch (error) {
      this.setState({
        error: true,
        errorMessage: `An error has occured: ${error.response.status}`
      })
      
  }
  };

  render() {

    let cityDataListItems = this.state.cityData.map((city, index) => <li key={index}>{city.name}</li>);
    
    return (
      
      <>
        <h1>Data from API</h1>
        <form onSubmit={this.getCityData}>
          <label>Pick a City:
            <input type='text' onInput={this.handleCityInput} />
            <button>Explore!</button>
          </label>
        </form>
        {this.state.error
        ?
        <p>{this.state.errorMessage}</p>
        :
        <ul>
          {cityDataListItems}
        </ul>

        /* function App() {
          return (
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>
              </header>
            </div> */}
        {/* ); */}
      </>
    );
  }
}

export default App;
