import React from 'react';

import { ContainerDropdownList } from './styles';

const DropdownListNull: React.FC = () => {
  return <ContainerDropdownList>
    <p>Não foi possível encontrar escolas</p>
  </ContainerDropdownList>;
}

export default DropdownListNull;