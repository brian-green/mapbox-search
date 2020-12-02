import React, { Component } from 'react';
import mapbox from 'mapbox-gl'
import './Map.css'

class Map extends Component {

  //calls this in the lifecycle after id=map is loaded below
  componentDidMount() {
    mapbox.accessToken = 'pk.eyJ1IjoiYnJpaWlhbiIsImEiOiJja2k0MHA3MWowY3R2Mnhtc25ycHE5bmcyIn0.OY0hKbYzgY24P52Lz3SHFA';

    var map = new mapbox.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11'
      });

  }

  render () {
    return (
      <div id="map">
        Map goes here
      </div>
    );
  }
}

export default Map;