import React, { HTMLAttributes, ReactNode } from 'react';

import { ContainerButton } from './styles';

interface ButtonProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode,
  gradient ?: any
}

const Button: React.FC<ButtonProps> = ({children, ...rest}) => {
  return <ContainerButton { ...rest } >
    {children}
  </ContainerButton>;
}

export default Button;