import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import '../App.css';
import CustomMarker from './CustomMarker';



class Map extends Component {
    render() {
        const GoogleMapWithMarkers = withScriptjs(withGoogleMap(props => (
            <GoogleMap
                defaultCenter={{ lat: 54.5260, lng: 15.2551 }}
                defaultZoom={4}
            >
                {this.props.allLocations.map((location) => (
                    <CustomMarker
                        location={location}
                        key={location.name}
                    />
                ))}

            </GoogleMap>
        )));

        return (
            <div>
                <GoogleMapWithMarkers
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBVeL1HVZDSt2LEVM51g1P3CoVXF90FH2Y"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `100vh` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
        );
    }
}

export default Map;