import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { ContainerPage404 } from './styles';

const Error404: React.FC = () => {
  return <ContainerPage404>
    <div className="erro-404">
      404
    </div>
    <h1>Opssss... <br/> A página que você procura não foi encontrada</h1>
    <Link to="/app/" className="enter-return">
      <FiArrowLeft />
      <p>Voltar</p>
    </Link>
  </ContainerPage404>;
}

export default Error404;