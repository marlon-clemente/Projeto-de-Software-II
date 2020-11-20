import React, {ReactNode} from 'react';
import { FiPhone } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import Clipboard from 'react-clipboard.js'; 

import { Container } from './styles';

interface Contact {
  number_phone?: string;
  email?: string;
  children?: ReactNode
}

const CardContato: React.FC<Contact> = ({number_phone, email, children}) => {
  return <Container>
    <div className="info">
      { number_phone ? (<FiPhone />) : (<HiOutlineMail />) }
      {number_phone ? (<p>{number_phone}</p>) : (<p>{email}</p>)}
    </div>
    <Clipboard data-clipboard-text={number_phone ? number_phone : email} className="copy">
      <p>Clique para copiar para área de transferência</p>
    </Clipboard>
  </Container>;
}

export default CardContato;