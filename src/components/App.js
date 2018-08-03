import React, { Component } from 'react';
import Map from './Map'
import '../App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allLocations: [
        {
          name: 'Pancava Waterfall',
          lat: 50.761189,
          lng: 15.546147
        },
        {
          name: 'Floyen',
          lat: 60.3983,
          lng: 5.3459
        },
      ],
      currentMarker: '',
    }
    this.setCurrentMarker = this.setCurrentMarker.bind(this)
  }
  

  setCurrentMarker(marker) {
    this.setState({ currentMarker: marker })
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>The best places in Wroclaw</h1>
        </header>
        <article id="map">
          <Map
            allLocations={this.state.allLocations}
          />
        </article>
      </div>
    );
  }
}

export default App;
