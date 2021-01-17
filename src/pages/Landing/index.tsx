import React from "react";
import { FiArrowRight } from "react-icons/fi";

import { LandingPager } from "./styles";
import Logo from "../../assets/logo.svg";
import LandingImg from "../../assets/landing.svg";
import { Link } from "react-router-dom";

const Landing: React.FC = () => {
  return (
    <LandingPager>
      <div className="landing-content">
        <img className="logo" src={Logo} alt="Logo" />
        <div className="imagem-bc">
          <img src={LandingImg} alt="" />
        </div>
        <div className="landing-text">
          <h1>Ajude a colorir o futuro de uma criança</h1>
          <strong>
            Busque, indique e encontre escolas que necessitam de doações de
            materiais escolares.
          </strong>
        </div>
        <div className="landing-button">
          <Link to="/app" className="enter-app">
            <p>Entrar na plataforma</p>
            <FiArrowRight size={26} color="rgba(0, 0, 0, 3.6)" />
          </Link>
        </div>
        <div className="landing-location">
          <strong>Santa Maria</strong>
          <span>Rio Grande do Sul</span>
        </div>
      </div>
    </LandingPager>
  );
};

export default Landing;
