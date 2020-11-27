import React from 'react';
import { Link } from 'react-router-dom';
import { InterfaceSchool } from '../../interface';

import { ContainerDropdownList } from './styles';

interface InterfaceDropList {
  schoolsFilter : InterfaceSchool[],
  value: string
}

const DropdownList: React.FC<InterfaceDropList> = ({schoolsFilter, value}) => {
  return(<ContainerDropdownList>
    {
      schoolsFilter.map((item:InterfaceSchool)=>(
        <div className="iten-school-list">
          <Link key={item.id} to={`app/school/${item.id}`}>{item.socialReason}</Link>
        </div>
      ))
    }
  </ContainerDropdownList>);
}

export default DropdownList;