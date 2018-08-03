import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import '../App.css';
import CustomMarker from './CustomMarker';

const Map = withScriptjs(withGoogleMap(props => (
    <GoogleMap
        defaultCenter={{ lat: 54.5260, lng: 15.2551 }}
        defaultZoom={4}
    >
        {props.allLocations.map((location) => (
            <CustomMarker
                location={location}
                key={location.name}
                currentMarker={props.currentMarker}
                setCurrentMarker={props.setCurrentMarker}
            />
        ))}
    </GoogleMap>
)));

export default Map;