import React, { useEffect, useState } from 'react';

import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import '../styles/school.css';
import { FiArrowRight, FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';

// import axios from 'axios'
import MapIconMarket from '../utils/mapIcon';
import axios from 'axios';

interface School {
  id: number,
  name: string,
  latitude: number,
  longitude: number
}

const Schools: React.FC = () => {
  const [school, setSchool] = useState<School[]>([]);

  useEffect(() => {
    axios.get('https://raw.githubusercontent.com/marlon-clemente/json-psII-temporario/main/school__.json')
      .then((response)=>{
        setSchool(response.data)
      })
  }, []);
  console.log(school)
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
        style={{ width: '100%', height:280 }}
        dragging = {false}
        touchZoom={false}
        zoomControl={false}
        scrollWheelZoom={false}
        doubleClickZoom={false}
      >
        <TileLayer url={
          `https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`
        }/>
        
        {
          school.map(school=>(
            <Marker
              key={school.id}
              icon={MapIconMarket}
              position={[school.longitude, school.latitude]}
            >
              <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                {school.name}
                <Link to={`/app/school/${school.id}`}>
                  <FiArrowRight size={20} color="#ffffff" />
                </Link>
              </Popup>
            </Marker>)
          )
        }
      </Map>

    </div>
  </>;
}

export default Schools;