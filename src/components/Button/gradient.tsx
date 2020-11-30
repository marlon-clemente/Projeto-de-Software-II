import React, { ReactNode } from 'react';

import { ContainerButton } from './styles';

interface ButtonProps {
  children?: ReactNode,
}

const ButtonGradient: React.FC<ButtonProps> = ({children}) => {
  return <ContainerButton gradient >
    {children}
  </ContainerButton>;
}

export default ButtonGradient;