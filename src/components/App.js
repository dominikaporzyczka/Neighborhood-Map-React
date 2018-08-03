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
      currentMarker: ''
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
          <h1>The best places in Wroclaw - {this.state.currentMarker}</h1>
        </header>
        <article id="map">
          <Map
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBVeL1HVZDSt2LEVM51g1P3CoVXF90FH2Y"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100vh` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            allLocations={this.state.allLocations}
            currentMarker={this.state.currentMarker}
            setCurrentMarker={this.setCurrentMarker}
          />
        </article>
      </div>
    );
  }
}

export default App;
