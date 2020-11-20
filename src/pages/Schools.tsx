import React, { useEffect, useState } from 'react';

import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import '../styles/school.css';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

// import axios from 'axios'
import MapIconMarket from '../utils/mapIcon';
import api from '../services/api';
import InputSearch from '../components/InputSearch';

import Logo from '../assets/logo.svg';

interface School {
  id: number,
  socialReason: string,
  latitudeSchool: number,
  longitudeSchool: number,
}

const Schools: React.FC = () => {
  const [school, setSchool] = useState<School[]>([]);
  
  useEffect(() => {
    getSchools();
  }, []);
  
  const getSchools = async () => {
    const { data } = await api.get('/schools')
    setSchool(data)
  }

  return <>
    <div id="page-map">
      <aside>
        <header>
          <img src={Logo} alt="Logo"/>
        </header>
        <InputSearch />
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
        
        {
          school.map((school)=>(
          <> {console.log(school.socialReason)} </>
            
            // <Marker
            //   key={school.id}
            //   icon={MapIconMarket}
            //   position={[school.longitudeSchool, school.latitudeSchool]}
            // >
            //   <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
            //     {school.socialReason}
            //     <Link to={`/app/school/${school.id}`}>
            //       <FiArrowRight size={20} color="#ffffff" />
            //     </Link>
            //   </Popup>
            // </Marker>
          ))
        }
      </Map>

    </div>
  </>;
}

export default Schools;