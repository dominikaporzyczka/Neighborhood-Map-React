import React, { Component } from 'react';
import Map from './Map'
import '../App.css';
import Search from './Search';

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
      currentMarker: '',
      filteredLocations: []
    }
    this.setCurrentMarker = this.setCurrentMarker.bind(this)
    this.setFilteredLocations = this.setFilteredLocations.bind(this)
  }

  componentDidMount() {
    this.setState({ filteredLocations: this.state.allLocations })
  }

  setCurrentMarker(marker) {
    this.setState({ currentMarker: marker })
  }

  setFilteredLocations(filteredLocations) {
    this.setState({ filteredLocations })
  }

  render() {
    return (
      <div id="App">
        <header>
          <h1>The best places in Wroclaw</h1>
        </header>
        <main>
          <section id="sidebar">
            <Search
              allLocations={this.state.allLocations}
              filteredLocations={this.state.filteredLocations}
              setCurrentMarker={this.setCurrentMarker}
              setFilteredLocations={this.setFilteredLocations}
            />
          </section>
          <section id="map">
            <Map
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBVeL1HVZDSt2LEVM51g1P3CoVXF90FH2Y"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `100%` }} />}
              mapElement={<div style={{ height: `100%` }} />}
              locations={this.state.filteredLocations}
              currentMarker={this.state.currentMarker}
              setCurrentMarker={this.setCurrentMarker}
            />
          </section>
        </main>
      </div>
    );
  }
}

export default App;
