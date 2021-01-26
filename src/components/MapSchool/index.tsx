import React from "react";
import { SiGooglemaps } from "react-icons/si";
import { Map, TileLayer, Marker } from "react-leaflet";

import MapIconMarket from "../../utils/mapIcon";
import MapIconElevate from "../../utils/ElevateIndications";
import NoIndications from "../../utils/NoIndications";

import { ContainerMapsComponent } from "./styles";

interface InterfaceMapSchool {
  latitude: number;
  longitude: number;
  indication: number;
}

const MapSchool: React.FC<InterfaceMapSchool> = ({
  latitude,
  longitude,
  indication,
}) => {
  return (
    <ContainerMapsComponent>
      <Map
        center={[longitude, latitude]}
        zoom={15}
        style={{
          width: "100%",
          height: 250,
          borderRadius: "20px 20px 0 0",
          zIndex: 1,
          marginTop: "1.2rem",
        }}
        dragging={false}
        touchZoom={false}
        zoomControl={false}
        scrollWheelZoom={false}
        doubleClickZoom={false}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
        <Marker
          icon={
            Number(indication) > 3
              ? MapIconElevate
              : indication === undefined
              ? NoIndications
              : MapIconMarket
          }
          position={[longitude, latitude]}
        ></Marker>
      </Map>

      <a
        target="_blank"
        rel="noopener noreferrer"
        href={`https://www.google.com/maps/dir/?api=1&destination=${longitude},${latitude}`}
        className="button-map"
      >
        <SiGooglemaps size="16" />
        <p>Abrir rota no Google Maps</p>
      </a>
    </ContainerMapsComponent>
  );
};

export default MapSchool;
