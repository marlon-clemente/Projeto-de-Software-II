import React, { ReactNode } from 'react';

import { ContainerButton } from './styles';

interface ButtonProps {
  children?: ReactNode;
}

const Button: React.FC<ButtonProps> = ({children}) => {
  return <ContainerButton>
    {children}
  </ContainerButton>;
}

export default Button;