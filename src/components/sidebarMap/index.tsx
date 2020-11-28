import React, { ReactNode, useEffect, useState } from 'react';

import { ContainerSidebarMap } from './styles';

import Logo from '../../assets/logo.svg';
import { FiSearch } from 'react-icons/fi';
import { InterfaceSchool } from '../../interface';
import DropdownList from '../DropdownList';
import DropdownListNull from '../DropdownList/void';

interface InterfaceSidebarMap {
  children?: ReactNode;
  schools: Array<InterfaceSchool>
}

const SidebarMap: React.FC<InterfaceSidebarMap> = ({children, schools}) => {
  const [isVisibleDrop, setIsVisibleDrop] = useState(false);
  const [value, setValue] = useState('');
  const [schoolFiltered, setSchoolFiltered ] = useState<Array<InterfaceSchool>>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setValue(value);
    changeResultVisible(value);
  }

  const changeResultVisible = (value: string)=>{
    setIsVisibleDrop(value.length >= 3)
  }

  useEffect(() => {
    if (value.length >= 3 && schools){
      setSchoolFiltered(
        schools.filter((sc: InterfaceSchool) => sc.socialReason.toLowerCase().includes(value))
      )
    }
  }, [value, schools]);

  return <ContainerSidebarMap>
    <div className="header-sidebar">
      <img src={Logo} alt=""/>
      <div className="search">
        <div className={ !isVisibleDrop ? (`searchInput`) : (`search-selected`)}>
        {/* <div className="searchInput"> */}
          <FiSearch color="#c3c3c3" size={20} />
          <input 
            type="text"
            value={value}
            onChange={handleChange}
            placeholder="Procurar escola..."
          />
        </div>

        {
          isVisibleDrop && (
            schoolFiltered.length > 0 ? (
              <DropdownList schoolsFilter={schoolFiltered} value={value} />) : 
              (<DropdownListNull />)
          )
        }

      </div>
      <div className="location-header">
        <strong>Santa Maria</strong>
        <span>Rio Grande do Sul</span>
      </div>
    </div>
    <section>
      {children}
    </section>
  </ContainerSidebarMap>;
}

export default SidebarMap;