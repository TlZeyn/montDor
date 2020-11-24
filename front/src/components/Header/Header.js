import React from 'react';

import './Header.css'

import Logo from '../../assets/Logo.svg'

const Header = () => {
  return (
    <header id="header">

      <img id="header__logo" src={Logo} alt="logo de Mont d'Or"/>
      <input id="header__button" type="button" value="Rejoindre la communauté" />

    </header>
  )
}

export default Header