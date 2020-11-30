import React from 'react';
import { FaInfo } from 'react-icons/fa';

import { AlertContainer } from './styles';

interface Alertinterface {
  type: string;
  text: string;
}

const Alert: React.FC<Alertinterface> = ({type, text}) => {
  return <AlertContainer>
    <FaInfo color="#3782C7" />
    <p>{text}</p>
  </AlertContainer>;
}

export default Alert;