import React from 'react';

import { TwitterShareButton } from 'react-share';
import { FacebookShareButton } from 'react-share';
import { WhatsappShareButton } from 'react-share';
import { EmailShareButton } from 'react-share';

import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from 'react-icons/hi';
import { RiShareForwardLine } from 'react-icons/ri';

interface ButtonShare {
  network: string;
}

const ButtonShare: React.FC<ButtonShare> = ( {network} ) => {
  
  const url = '#';

  if (network === 'Twitter'){
    return (
    <TwitterShareButton 
      style={{
        width: '48px',
        height: '48px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ffffff',
        borderRadius: '16px',
        margin: '1.2rem 1.2rem',
        backgroundColor: '#63cdf1',
        marginLeft: '0'
      }} url={url}>
      <FaTwitter />
    </TwitterShareButton>)
  }
  else if (network === 'Facebook'){
    return (<FacebookShareButton style={{width: '48px',
      height: '48px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#ffffff',
      borderRadius: '16px',
      margin: '1.2rem 1.2rem',
      backgroundColor: '#507cbe'
      }} url={url}> <FaFacebookF />
    </FacebookShareButton>)
  }
  else if (network === 'WhatsApp'){
    return (<WhatsappShareButton style={{width: '48px',
      height: '48px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#ffffff',
      borderRadius: '16px',
      margin: '1.2rem 1.2rem',
      backgroundColor: '#66cc99'
    }} url={url}> <FaWhatsapp size={24} /></WhatsappShareButton>)
  }
  else if (network === 'Email'){
    return (<EmailShareButton style={{width: '48px',
      height: '48px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#ffffff',
      borderRadius: '16px',
      margin: '1.2rem 1.2rem',
      backgroundColor: '#fcc95d'
    }} url={url}> <HiOutlineMail size={24} /></EmailShareButton>)
  }
  else if (network === 'More'){
    return (<div style={{width: '48px',
      height: '48px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#ffffff',
      borderRadius: '16px',
      margin: '1.2rem 1.2rem',
      backgroundColor: '#90cadd'
    }}> <RiShareForwardLine size={24} /></div>)
  }
  else return <>undefined</>
}

export default ButtonShare;