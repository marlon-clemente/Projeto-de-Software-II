import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

import '../styles/landing.css';

import { Link } from 'react-router-dom';

const Landing: React.FC = () => {
  return (
  <div id="landing-page">
    <div className="content">
      <h1>Logo</h1>

      <Link to="/app" className="enter-app">
        <>Acessar</>
        <FiArrowRight size={26} color="rgba(0, 0, 0, 3.6)" />
      </Link>

    </div>
  </div>
  );
}

export default Landing;