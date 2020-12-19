import React, { ReactNode } from 'react';
import { FaInfo } from 'react-icons/fa';

import { AlertContainer } from './styles';

interface Alertinterface {
  type: string;
  children?: ReactNode;
}

const Alert: React.FC<Alertinterface> = ({type, children}) => {
  return <AlertContainer>
    <FaInfo color="#3782C7" />
    <p>
      {children}
    </p>
  </AlertContainer>;
}

export default Alert;