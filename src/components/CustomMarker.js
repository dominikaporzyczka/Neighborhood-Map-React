import React, { Component } from 'react';
import { Marker, InfoWindow } from 'react-google-maps';
import InfoAboutLocation from './InfoAboutLocation'

class CustomMarker extends Component {
    state = {
        isOpen: false
    }

    onClickMarker = () => {
        const self = this

        if (self.state.isOpen && self.props.location.name === self.props.currentMarker) {
            self.props.setCurrentMarker('')
        } else if (!self.state.isOpen) {
            self.props.setCurrentMarker(self.props.location.name)
        }

        self.setState((prevState) => ({
            isOpen: !prevState.isOpen
        }))
    }

    render() {
        return (
            <Marker
                position={{ lat: this.props.location.lat, lng: this.props.location.lng }}
                animation={
                    this.props.location.name === this.props.currentMarker ? 1 : 0
                }
                onClick={this.onClickMarker}    
            >
                {this.props.location.name === this.props.currentMarker && <InfoWindow onCloseClick={this.onClickMarker}>
                    <InfoAboutLocation
                        location={this.props.location}
                    />
                </InfoWindow>}
            </Marker>
        );
    }
}

export default CustomMarker;