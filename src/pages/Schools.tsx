import React from 'react';

import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import mapMarket from '../assets/market.png';
import Leaflet from 'leaflet';

import '../styles/school.css';
import { FiArrowRight, FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const mapIconMarket = Leaflet.icon({
  iconUrl: mapMarket,
  iconSize:[68,68],
  iconAnchor: [34, 68],
  popupAnchor: [170, 2]
})


const Schools: React.FC = () => {
  return <>
    <div id="page-map">
      <aside>
        <header>
          <h1>Logo</h1>
        </header>
        <div className="input-search-school">
          <FiSearch color="#c3c3c3" size={20} />
          <input type="text" value="Procurar escola..."/>
        </div>
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
        <Marker
          icon={mapIconMarket}
          position={[-29.6899828,-53.8080099]}
        >
          <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
            Nome da Escola
            <Link to="/">
              <FiArrowRight size={20} color="#ffffff" />
            </Link>
          </Popup>
        </Marker>
        
      </Map>

    </div>
  </>;
}

export default Schools;