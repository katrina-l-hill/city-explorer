import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityData: {},
    }
  }

  handleCityInput = (event) => {
    this.setState({
      city: event.target.value
    })
  }
  getCityData = async (event) => {
    event.preventDefault();
    // get the data from the API
    let cityData = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`);
    // save that data into state
    this.setState({
      cityData: 'data back from API.data.results'
    });
  };

  render() {

    return (
      <>
        <h1>Data from API</h1>
        <form onSubmit={this.getCityData}>
          <label>Pick a City:
            <input type = 'text' onInput={this.handleCityInput}/> 
            <button>Explor!</button>
          </label>
        </form>
      
    
  

        {/* function App() {
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
          );
      </>      
    );
  }
}

export default App;
