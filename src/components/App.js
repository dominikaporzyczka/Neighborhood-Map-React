import React, { Component } from 'react';
import Map from './Map'
import '../App.css';
import Search from './Search';
import MarkersData from '../MarkersData'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      markers: MarkersData.data,
      currentMarker: '',
      filteredLocations: [],
      showSideBar: true
    }
    this.setCurrentMarker = this.setCurrentMarker.bind(this)
    this.setFilteredLocations = this.setFilteredLocations.bind(this)
    this.toggleSideBar = this.toggleSideBar.bind(this)
  }

  componentDidMount() {
    this.setState({ filteredLocations: this.state.markers })
    if (window.innerWidth < 500) {
      this.setState({ showSideBar: false })
    }
  }

  setCurrentMarker(marker) {
    this.setState({ currentMarker: marker })
  }

  setFilteredLocations(filteredLocations) {
    this.setState({ filteredLocations })
  }

  toggleSideBar() {
    this.setState({ showSideBar: !this.state.showSideBar })
  }

  render() {
    return (
      <div id="App">
        <header>
          <a className="hamburger-icon" aria-label="Toggle place list" onClick={this.toggleSideBar}>
            &#9776;
          </a>
          <h1>The best places in Wroclaw</h1>
        </header>
        <main>
          <section id="sidebar" className={this.state.showSideBar ? 'active' : ''}>
            <Search
              markers={this.state.markers}
              filteredLocations={this.state.filteredLocations}
              setCurrentMarker={this.setCurrentMarker}
              setFilteredLocations={this.setFilteredLocations}
            />
          </section>
          <section id="map" role="application">
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
