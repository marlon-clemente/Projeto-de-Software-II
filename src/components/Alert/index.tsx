import React from 'react';
import { AlertComponentPropsWithStyle } from 'react-alert';
import { FiCornerUpRight, FiInfo } from 'react-icons/fi';
import { RiErrorWarningFill } from 'react-icons/ri';

import { AlertContainerDiv } from './styles';

const Alert: React.FC<AlertComponentPropsWithStyle> = ({ message, options, close }) => {

  return (
    <AlertContainerDiv>
      {options.type === 'info' && <FiInfo />}
      {options.type === 'success' && <FiCornerUpRight />}
      {options.type === 'error' && <RiErrorWarningFill />}
      <span style={{ flex: 2, marginLeft: '16px'}}>{message}</span>
      <div onClick={close} className="button-alert" />
    </AlertContainerDiv>
  )
}

export default Alert;