import React, { Component } from 'react';
import mapbox from 'mapbox-gl'
import './Map.css'

class Map extends Component {

  //calls this in the lifecycle after id=map is loaded below
  componentDidMount() {
    //connects to app.js state
    const app = this.props.app

    mapbox.accessToken = 'pk.eyJ1IjoiYnJpaWlhbiIsImEiOiJja2k0MHA3MWowY3R2Mnhtc25ycHE5bmcyIn0.OY0hKbYzgY24P52Lz3SHFA';

    const map = new mapbox.Map({
      container: 'map',
      //pulled in from state in app.js
      style: app.state.style,
      center:[
        app.state.longitude,
         app.state.latitude
      ],
      zoom: 12
      });

    //adding nav
    const navigationControl = new mapbox.NavigationControl()

    //default is top right
    map.addControl(navigationControl)
  }

  render () {
    return (
      <div id="map">
      </div>
    );
  }
}

export default Map;