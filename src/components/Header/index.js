import React from 'react';
import Logo from '../../assets/img/logo.png';
import {HeaderStyle} from './style'

export default function Header() {
  return (
    <HeaderStyle>
      <img src={Logo}
      height='45px'
      width='210px'
      alt="Logo Webmotors"/>            
    </HeaderStyle>
  )
}
