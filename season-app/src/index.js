import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
  constructor(props) {
    super(props); //Calls constructor() parent
    
    // ONLY TIME we do direct assignment to this.state
    this.state = {
      lat: null, // initialized 'null' because we don't know the value yet
      errorMessage: ''
    }

    window.navigator.geolocation.getCurrentPosition(
      position => {
        // updating the state with the setState() function
        this.setState({
          lat: position.coords.latitude
        })
        // NEVER DO THIS:
        // this.state.lat = position.coords.latitude
      }, err => {
        this.setState({
          errorMessage: err.message
        })
      }
    )
  }
  // React says we have to define render!!
  render() {
    // return <div>Latitude: { this.state.lat }</div>
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    }

    if (this.state.lat && !this.state.errorMessage) {
      return <div>Latitude: {this.state.lat}</div>
    }

    return <div>Loading!!</div>
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

