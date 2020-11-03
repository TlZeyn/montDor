import React from 'react';

import './Header.css'

const Header = () => {
  return (
    <header id="header">

      <img id="header__logo" src={require('../../assets/Logo.svg')} alt="logo de Mont d'Or"/>
      <input id="header__button" type="button" value="Rejoindre la communauté" />

    </header>
  )
}

export default Header