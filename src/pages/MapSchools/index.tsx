import React, { useEffect, useState } from 'react';

import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import MapIconMarket from '../../utils/mapIcon';
import api from '../../services/api';

import SidebarMap from '../../components/sidebarMap';

import './styles.css';

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

  return <SidebarMap schools={school}>

    <div id="page-map">
      <Map
        center={[-29.6899828,-53.8080099]}
        zoom={15}
        style={{ width: '100%', height:'100%'}}
      >
        <TileLayer url={
          `https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`
        }/>
        


        {school.map((school, index)=>(<>{
          index < 25 && (
            <Marker
            key={school.id}
              icon={MapIconMarket}
              position={[school.longitudeSchool, school.latitudeSchool]}
            >
              <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                {school.socialReason}
                <Link to={`/app/school/${school.id}`}>
                  <FiArrowRight size={20} color="#ffffff" />
                </Link>
              </Popup>
            </Marker>
            )
        }</>))}
      </Map>
        <div className="my-location-popup">
          L
        </div>
    </div>
    </SidebarMap>;
}

export default Schools;