import React, {ReactNode} from 'react';
import { FiPhone, FiVoicemail } from 'react-icons/fi';

import { Container } from './styles';

interface Contact {
  number_phone?: number;
  email?: string;
  children?: ReactNode
}

const CardContato: React.FC<Contact> = ({number_phone, email, children}) => {
  return <Container>
    <div className="info">
        { number_phone ? (<FiPhone />) : (<FiVoicemail />) }
        <p>{number_phone}</p>
    </div>
    <div className="copy">
      <p>Clique para copiar para área de transferência</p>
    </div>
  </Container>;
}

export default CardContato;