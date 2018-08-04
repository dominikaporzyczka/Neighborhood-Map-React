import React, { Component } from 'react';
import Map from './Map'
import '../App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allLocations: [
        {
          name: 'Polish Lody',
          lat: 51.1165598,
          lng: 17.042102
        },
        {
          name: 'Rynek',
          lat: 51.1094543,
          lng: 17.03133219999995
        },
        {
          name: 'ZOO Wrocław',
          lat: 51.1041258,
          lng: 17.074197000000026
        },
        {
          name: 'Przełam Lody',
          lat: 51.1083577,
          lng: 17.068400999999994
        },
        {
          name: 'Park Zachodni',
          lat: 51.1323534,
          lng: 16.969623400000046
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
