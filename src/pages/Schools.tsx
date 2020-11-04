import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import '../styles/school.css';

const Schools: React.FC = () => {
  return <>
    <div id="page-map">
      <aside>
        <header>
          <h1>Logo</h1>
        </header>
        <footer>
          <strong>Santa Maria</strong>
          <span>Rio Grande do Sul</span>
        </footer>
      </aside>

      <Map
        center={[-29.6899828,-53.8080099]}
        zoom={15}
        style={{ width: '100%', height:'100%' }}
      >
        <TileLayer url={
          `https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`
        }/>
      </Map>

    </div>
  </>;
}

export default Schools;