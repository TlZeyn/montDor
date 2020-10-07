import React from 'react';

import './Header.css'

const Header = () => {
  return (
    <header id="header">

      <img id="header__logo" src={require('../assets/logo.png')} alt="logo de Mont d'Or"/>
      <input id="header__button" type="button" value="Rejoindre la communauté" />

    </header>
  )
}

export default Header