import React, { Component } from 'react';
import { Marker } from 'react-google-maps';

export class RiverMarker extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showTooltip: false
    }
  }

  clickTooltip() {
    this.setState({ showTooltip: !this.state.showTooltip })
  }

  closeWindow() {
    this.setState({ showTooltip: false })
  }

  render() {
    const {showTooltip} = this.state
    const {fish, description, id} = this.props

    return(
      <Marker>
        markerWithLabel={window.MarkerWithLabel}
        onClick={this.clickTooltip.bind(this)}
        position={{
          lat: 42.814365,
          lng: -89.068361
        }}
      </Marker>
    );
  }
}

export default RiverMarker;