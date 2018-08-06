import React, { Component } from 'react';
import * as PlacesAPI from '../PlacesAPI'

class InfoAboutLocation extends Component {
    state = {
        data: '' //Additional data from foursquare.com
    }

    componentDidMount() {
        PlacesAPI.getMarkerInfo(this.props.location).then((data) => {
            this.setState({ data })
        })
    }

    render() {
        const { data } = this.state

        return (
            <div className="infowindow">
                {!data && <div>Loading...</div>}
                {data &&
                    <div>
                        <p className="infowindow-name">{data.name}</p>
                        <p className="infowindow-type">{data.categories[0].name}</p>
                        <p className="infowindow-address">{data.location.formattedAddress.join(', ')}</p>
                        <p className="infowindow-source-of-data">Source of information: <a href="https://foursquare.com/">Foursquare</a></p>
                    </div>
                }
            </div>
        )
    }

}

export default InfoAboutLocation;