import React, { Component } from 'react';
import { Marker, InfoWindow } from 'react-google-maps';

class CustomMarker extends Component {
    render() {
        return (
            <Marker
                position={{ lat: this.props.location.lat, lng: this.props.location.lng }}
            >
                <InfoWindow>
                    <div>Hi, I'm InfoWindow</div>
                </InfoWindow>
            </Marker>
        );
    }
}

export default CustomMarker;