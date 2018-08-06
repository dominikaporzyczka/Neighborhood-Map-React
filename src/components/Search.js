import React, { Component } from 'react'

class Search extends Component {
    state = {
        query: ''
    }

    updateQuery = (query) => {
        this.setState({ query: query.toLowerCase() })
    }

    filterList = (e) => {
        if (!this.state.query) {
            this.props.setFilteredLocations(this.props.markers)
        } else {
            const filteredList = this.props.markers.filter((location) => (
                location.name.toLowerCase().includes(this.state.query)
            ))

            this.props.setFilteredLocations(filteredList)
        }

        e.preventDefault()
    }

    render() {
        return (
            <div>
                <form onSubmit={this.filterList} role="search">
                    <input
                        type="text"
                        aria-label="search place"
                        placeholder="Search"
                        value={this.state.query}
                        onChange={(event) => (
                            this.updateQuery(event.target.value)
                        )}
                    />
                    <button type="submit">OK</button>
                </form>
                <ul className="locations-list">
                    {this.props.filteredLocations.map((location) => (
                        <li key={location.name}>
                            <a tabIndex="0"
                                role="button" 
                                onClick={() => { this.props.setCurrentMarker(location.name) }}
                                onKeyPress={(e) => (e.key === 'Enter') ? this.props.setCurrentMarker(location.name) : 0}
                            >
                                {location.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Search;