import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import "leaflet/dist/leaflet.css";

import api from "../../services/api";

import { RiShareForwardLine } from "react-icons/ri";
import { GrContact, GrLocation } from "react-icons/gr";

import Sidebar from "../../components/sidebar";
import Divider from "../../components/divider";
import CardContato from "../../components/card_contato";

import { ContainerShoolShow } from "./styled";
import ButtonShare from "../../components/ButtonShare";
import Info from "../../components/Info";
import Recommendation from "../../components/Recommendation";
import MapSchool from "../../components/MapSchool";
import Loading from "../../components/Loading";

interface SchoolsParams {
  id: string;
}

interface School {
  id: number;
  socialReason: string;
  latitudeSchool: number;
  longitudeSchool: number;
  emailSchool: string;
  addressSchool: string;
  numberPhone: string;
  indications: number;
}

const SchoolShow: React.FC = () => {
  const params = useParams<SchoolsParams>();
  const [school, setSchool] = useState<School>();
  const [isShowInfo, setIsShowInfo] = useState(false);
  const history = useHistory();

  useEffect(() => {
    api
      .get(`/indications/${params.id}/2021`)
      .then((res) => {
        setSchool(res.data);
      })
      .catch((res) => {
        history.push(`/error`);
      });
    console.log("[debug] render pageShowSchool");
  }, [history, params.id]);

  if (!school) {
    return <Loading />;
  }

  const handleClickOnShowInfo = () => {
    setIsShowInfo(!isShowInfo);
  };

  return (
    <ContainerShoolShow>
      <Sidebar title={school?.socialReason}>
        <div className="title">
          <GrLocation />
          <p>Localização</p>
        </div>
        <div className="text">{school?.addressSchool}</div>
        <Divider />

        <MapSchool
          latitude={school.latitudeSchool}
          longitude={school.longitudeSchool}
        />

        <Divider />

        <div className="header-recommendation-schools">
          <div className="title-rs">
            <GrContact />
            <p>Indicações</p>
          </div>
          <div
            className="button-show-info-recommendation-schools"
            onClick={handleClickOnShowInfo}
          >
            {isShowInfo ? <p>X Fechar</p> : <p>O que são indicações</p>}
          </div>
        </div>
        {isShowInfo && (
          <Info type="alert">
            As <b>indicações</b> mostram o quanto a escola necessita de ajuda.
            Ao realizar uma indicação você concorda que a escola está apta a
            receber doações de materiais escolares.
          </Info>
        )}

        <Recommendation
          idSchool={school.id}
          numberIndication={
            school.indications === undefined ? 0 : Number(school.indications)
          }
        />

        <div className="title">
          <GrContact />
          <p>Contato</p>
        </div>
        <CardContato number_phone={school.numberPhone} />
        <CardContato email={school.emailSchool} />

        <div className="title">
          <RiShareForwardLine />
          <p>Compartilhar</p>
        </div>

        <div className="buttons-shared">
          <ButtonShare network="Twitter" />
          <ButtonShare network="Facebook" />
          <ButtonShare network="WhatsApp" />
          <ButtonShare network="Email" />
        </div>
      </Sidebar>
    </ContainerShoolShow>
  );
};

export default SchoolShow;
