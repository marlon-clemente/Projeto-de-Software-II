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
  link: string;
}

const styles = {
  width: '48px',
  height: '48px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#ffffff',
  borderRadius: '16px',
  margin: '1.2rem 1.2rem',
}

const styles_twitter = {backgroundColor: '#63cdf1', marginLeft: '0'}
const styles_facebook = {backgroundColor: '#507cbe'}
const styles_whatsapp = {backgroundColor: '#66cc99'}
const styles_email = {backgroundColor: '#fcc95d'}
const styles_more = {backgroundColor: '#90cadd'}

const ButtonShare: React.FC<ButtonShare> = ( props ) => {
  
  if (props.network === 'Twitter'){
    return (<TwitterShareButton style={Object.assign(styles, styles_twitter)} url={props.link}> <FaTwitter /> </TwitterShareButton>)
  }
  if (props.network === 'Facebook'){
    return (<FacebookShareButton style={Object.assign(styles, styles_facebook)} url={props.link}> <FaFacebookF /> </FacebookShareButton>)
  }
  if (props.network === 'WhatsApp'){
    return (<WhatsappShareButton style={Object.assign(styles, styles_whatsapp)} url={props.link}> <FaWhatsapp size={24} /></WhatsappShareButton>)
  }
  if (props.network === 'Email'){
    return (<EmailShareButton style={Object.assign(styles, styles_email)} url={props.link}> <HiOutlineMail size={24} /></EmailShareButton>)
  }
  if (props.network === 'More'){
    return (<div style={Object.assign(styles, styles_more)}> <RiShareForwardLine size={24} /></div>)
  }
  return <>undefined</>
}

export default ButtonShare;