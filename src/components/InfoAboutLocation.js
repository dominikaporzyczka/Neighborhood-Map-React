import React, { Component } from 'react';
import * as PlacesAPI from '../PlacesAPI'

class InfoAboutLocation extends Component {
    state = {
        data: ''
    }

    componentDidMount() {
        PlacesAPI.getMarkerInfo(this.props.location).then((data) => {
            this.setState({ data })
        })
    }

    render() {
        const { data } = this.state

        return (
            <div>
                {!data && <div>Loading...</div>}
                {data && 
                    <div>
                        <p>{data.name}</p>
                        <p>{data.categories[0].name}</p>
                        <p>{data.location.formattedAddress.join(', ')}</p>
                    </div>
                }

            </div>
        )
    }

}

export default InfoAboutLocation;