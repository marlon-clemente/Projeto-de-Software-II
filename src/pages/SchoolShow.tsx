import React, { useEffect, useState } from 'react';
import Divider from '../components/divider';
import Sidebar from '../components/sidebar';
import { useParams } from 'react-router-dom';
import { Map, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import MapIconMarket from '../utils/mapIcon';

import { ContainerShoolShow } from '../styles/schoolShow';
import { Link } from 'react-router-dom';
import api from '../services/api';

interface SchoolsParams {
  id: string;
}

interface School {
  id: number,
  socialReason: string,
  latitudeSchool: number,
  longitudeSchool: number,
  emailSchool: string,
  addressSchool: string,
  numberPhone: string
}

const SchoolShow: React.FC = () => {
  const params = useParams<SchoolsParams>();
  const [school, setSchool] = useState<School>();

  useEffect(() => {
    api.get(`/schools/${params.id}`)
    .then((res)=>{
      setSchool(res.data)
    })
  }, [params.id]);

  if(!school){
    return <p>ret</p>
  }

  return <ContainerShoolShow>
  <Sidebar title={school?.socialReason}>
      <div className="title">Localização</div>
      {/* <div className="text">Bairro tal</div> */}
      <div className="text">{school?.addressSchool}</div>
      <Divider />
      <Map
        center={[school.longitudeSchool, school.latitudeSchool]}
        zoom={15}
        style={{ width: '100%', height:250, borderRadius: '20px 20px 0 0', position: 'relative' }}
        dragging = {false}
        touchZoom={false}
        zoomControl={false}
        scrollWheelZoom={false}
        doubleClickZoom={false}
      >
        <TileLayer url={
          `https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`
        }/>
        <Marker icon={MapIconMarket} position={[-29.6899828,-53.8080099]}></Marker>
      </Map>

      <Link to="#" className="button-map">
        Abrir rota no Google Maps
      </Link>
      
      <Divider />
      
      <div className="title">Contato</div>
      <div className="title">Contato</div>
      <div className="title">Contato</div>

   
      {/* {<CardContato number_phone={123456789} />
      <CardContato email="email_contato@email.com" /> */}
    </Sidebar> 
       
  </ContainerShoolShow>;
}

export default SchoolShow;