import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Map, TileLayer, Marker } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import MapIconMarket from '../../utils/mapIcon';
import api from '../../services/api';

import { RiShareForwardLine } from 'react-icons/ri';
import { GrContact, GrLocation } from 'react-icons/gr';
import { SiGooglemaps } from 'react-icons/si';

import Sidebar from '../../components/sidebar';
import Divider from '../../components/divider';
import CardContato from '../../components/card_contato';

import { ContainerShoolShow } from './styled';
import ButtonShare from '../../components/ButtonShare';
import Alert from '../../components/Alert';
import Recommendation from '../../components/Recommendation';

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
  const [isShowInfo, setIsShowInfo] = useState(false);
  // const [isRecommendation, setIsRecommendation] = useState(false);
  const history = useHistory();

  useEffect(() => {
    api.get(`/schools/${params.id}`)
    .then((res)=>{
      setSchool(res.data)
    })
    .catch((res)=>{
      history.push(`/schools/${params.id}`)
    })
  }, [history, params.id]);

  if(!school){
    return <p>ret</p>
  }

  const handleClickOnShowInfo = () => {
    setIsShowInfo(!isShowInfo);
  }

  return <ContainerShoolShow><Sidebar title={school?.socialReason}>
    <div className="title"><GrLocation/><p>Localização</p></div>
    <div className="text">{school?.addressSchool}</div>
    <Divider />

    <Map
      center={[school.longitudeSchool, school.latitudeSchool]}
      zoom={15}
      style={{ width: '100%', height:250, borderRadius: '20px 20px 0 0', position: 'relative', marginTop: '1.2rem' }}
      dragging = {false}
      touchZoom={false}
      zoomControl={false}
      scrollWheelZoom={false}
      doubleClickZoom={false}
    >
      <TileLayer url={
        `https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`
      }/>
      <Marker icon={MapIconMarket} position={[school.longitudeSchool, school.latitudeSchool]}></Marker>
    </Map>

    <a target="_blank" rel="noopener noreferrer" href={`https://www.google.com/maps/dir/?api=1&destination=${school.longitudeSchool},${school.latitudeSchool}`} className="button-map">
      <SiGooglemaps size="16" />
      <p>Abrir rota no Google Maps</p>
    </a>
      
    <Divider />
    
    <div className="header-recommendation-schools">
      <div className="title-rs"><GrContact/><p>Indicações</p></div>
      <div className="button-show-info-recommendation-schools"
        onClick={handleClickOnShowInfo}>
        { isShowInfo ? (<p>Fechar</p>) : (<p>O que são indicações</p>)}
      </div>
    </div>
    { isShowInfo && (<Alert type="alert" text="As indicações são..." />)}
    
    <Recommendation noneRecommendation={true} />

    <div className="title"><GrContact/><p>Contato</p></div>
    <CardContato number_phone={school.numberPhone} />
    <CardContato email={school.emailSchool} />
    
    <div className="title"><RiShareForwardLine /><p>Compartilhar</p></div>
    
    <div className="buttons-shared">
      <ButtonShare network="Twitter"/>
      <ButtonShare network="Facebook"/>
      <ButtonShare network="WhatsApp"/>
      <ButtonShare network="Email"/>
      <ButtonShare network="More"/>
    </div>
  
  </Sidebar></ContainerShoolShow>;
}

export default SchoolShow;