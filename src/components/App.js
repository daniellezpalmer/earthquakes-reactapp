import React, { Component } from 'react';
import '../styles/App.css';
import EarthquakeInfo from './earthquakeinfo.js'
import EarthquakeList from './earthquakelist.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="title">
          <div className="my-header">
            Earthquakes!
          </div>
          <EarthquakeInfo />
          <EarthquakeList />
        </div>
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    );
  }
}

export default App;
