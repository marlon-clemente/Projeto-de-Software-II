import React, {ReactNode} from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Aside } from './styles';

import Logo from '../../assets/logo.svg';

interface SidebarProps {
  title?: string;
  children?: ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({title, children}) => {
  return (<>
    <Aside>
      <div className="head-sidebar-map">
        <div className="content">
          <Link to="/app">
            <FiArrowLeft size="22" />
            Voltar ao mapa
          </Link>
          <img src={Logo} alt="Logo"/>
        </div>
        <div className="name-school">{title}</div>
      </div>
      <div className="main-sidebar-show-school">
        {children}
      </div>
      <footer>
        <img src={Logo} alt="Logo"/>
        Versão 1
      </footer>
    </Aside>
    
  </>);
}

export default Sidebar;