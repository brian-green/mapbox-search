import React, { Component } from 'react';
import Map from './Map'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    // default state
    this.state = {
      latitude: 40.7128,
      longitude: -74.0060,
      style: 'mapbox://styles/mapbox/light-v9'
    }
  }

  render () {
    return (
      <div className="App">
        <Map app={this}></Map>
      </div>
    );
  }
}

export default App;