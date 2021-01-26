import React, { useEffect, useRef, useState } from "react";

import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

import MapIconMarket from "../../utils/mapIcon";
import MapIconElevate from "../../utils/ElevateIndications";
import NoIndications from "../../utils/NoIndications";

import MapIconMarketMyLocation from "../../utils/mapIconMyLocation";
import api from "../../services/api";
import Modal from "react-modal";
import SidebarMap from "../../components/sidebarMap";

import IconZero from "../../assets/schoolNo.svg";
import IconExag from "../../assets/alertSchoolIcon.svg";
import IconDefault from "../../assets/schoolIcon.svg";

import "./styles.css";
import useGeoLocation from "../../hooks/useGeoLocation";
import { useAlert } from "react-alert";
import { RiUserLocationFill } from "react-icons/ri";
import Button from "../../components/Button";
import { MdHelp } from "react-icons/md";

interface School {
  id: number;
  socialReason: string;
  latitudeSchool: number;
  longitudeSchool: number;
  indications: string | null;
}

Modal.setAppElement("#root");

const Schools: React.FC = () => {
  const [school, setSchool] = useState<School[]>([]);
  const [showHoverLocationButton, setShowHoverLocationButton] = useState(false);
  const [modal, setModal] = useState(false);
  const [showHoverHelp, setShowHoverHelp] = useState(false);
  const mapRef = useRef<Map>(null);
  const location = useGeoLocation();
  const alert = useAlert();

  function openModal() {
    setModal(true);
  }

  function closeModal() {
    setModal(false);
  }

  const showMyLocation = () => {
    if (location.loaded && !location.error && location.coordinates.lat !== 0) {
      mapRef.current?.leafletElement.flyTo(
        [location.coordinates.lat, location.coordinates.lng],
        16,
        {
          animate: true,
        }
      );
    } else {
      alert.show(location.error?.message);
    }
  };

  useEffect(() => {
    const fetchSchool = async () => {
      await api
        .get("/schools/2021/2021")
        .then((res) => {
          setSchool(res.data);
        })
        .catch((err) => {
          alert.show(
            "Estamos com dificuldade de conexão! Por favor! Tente novamente mais tarde"
          );
        });
    };
    console.log("[debug] render pageMap");
    fetchSchool();
  }, [alert]);

  return (
    <SidebarMap schools={school}>
      <div id="page-map">
        <Map
          center={[-29.6899828, -53.8080099]}
          zoom={15}
          style={{ width: "100%", height: "100%" }}
          ref={mapRef}
        >
          <TileLayer
            url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
          />

          {location.loaded && !location.error && (
            <Marker
              icon={MapIconMarketMyLocation}
              position={[location.coordinates.lat, location.coordinates.lng]}
            ></Marker>
          )}

          {school.map((school, index) => (
            <>
              {index < 25 && (
                <>
                  {(() => (
                    <Marker
                      key={school.id}
                      icon={
                        Number(school.indications) > 3
                          ? MapIconElevate
                          : school.indications === null
                          ? NoIndications
                          : MapIconMarket
                      }
                      position={[school.longitudeSchool, school.latitudeSchool]}
                    >
                      <Popup
                        closeButton={false}
                        minWidth={240}
                        maxWidth={240}
                        className="map-popup"
                      >
                        {school.socialReason}
                        <Link to={`/app/school/${school.id}`}>
                          <FiArrowRight size={20} color="#ffffff" />
                        </Link>
                      </Popup>
                    </Marker>
                  ))()}
                </>
              )}
            </>
          ))}
        </Map>
        {showHoverLocationButton && (
          <div className="my-location-popup-info">
            <span>Minha localização</span>
          </div>
        )}
        {showHoverHelp && (
          <div className="popup-help">
            <span>Ajuda</span>
          </div>
        )}
        <div
          className="help-popup"
          onMouseOver={() => setShowHoverHelp(true)}
          onMouseOut={() => setShowHoverHelp(false)}
          onClick={openModal}
        >
          <MdHelp size={25} />
        </div>
        <div
          className="my-location-popup"
          onMouseOver={() => setShowHoverLocationButton(true)}
          onMouseOut={() => setShowHoverLocationButton(false)}
          onClick={showMyLocation}
        >
          <RiUserLocationFill size={25} />
        </div>
      </div>
      <Modal
        isOpen={modal}
        onAfterOpen={openModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="Modal"
        overlayClassName="Overlay"
      >
        <h2>Ajuda</h2>
        <div className="modal-body">
          <span>
            Encontre escolas que precisam de sua ajuda. A cor do icone do mapa
            representa qual o tamanho da necessidade que a escola esta passando
            segundo a população.
          </span>
          {/* CUIDADO icons invertidos */}
          <div className="list">
            <img src={IconDefault} alt="" />
            <span>Representam escolas com nenhuma indicação</span>
          </div>
          <div className="list">
            <img src={IconZero} alt="" />
            <span>
              Representam escolas com um número moderado de indicações
            </span>
          </div>
          <div className="list">
            <img src={IconExag} alt="" />
            <span>Representam escolas com um número alto de indicações</span>
          </div>
        </div>
        <Button gradient onClick={closeModal}>
          Fechar
        </Button>
      </Modal>
    </SidebarMap>
  );
};

export default Schools;
