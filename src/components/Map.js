import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import CustomMarker from './CustomMarker';

const Map = withScriptjs(withGoogleMap(props => (
    <GoogleMap
        defaultCenter={{ lat: 51.1078852, lng: 17.0385376 }}
        defaultZoom={12}
    >
        {props.locations.map((location) => (
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