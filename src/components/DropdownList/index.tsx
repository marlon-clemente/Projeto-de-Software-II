import React from 'react';
import { Link } from 'react-router-dom';
import { InterfaceSchool } from '../../interface';

import { Container } from './styles';

interface InterfaceDropList {
  schoolsFilter : InterfaceSchool[],
  value: string
}

const DropdownList: React.FC<InterfaceDropList> = ({schoolsFilter, value}) => {
  return(<>
    {
      schoolsFilter.map((item:InterfaceSchool)=>(
        <Link key={item.id} to={`app/school/${item.id}`}>{item.socialReason}</Link>
      ))
    }
  </>);
}

export default DropdownList;