// Librairies
import React from 'react'
// Style
import './Header.css'

const Header = () => {

  // Functions
  const scrollToPosition = (posX, posY) => {
    window.scrollTo({
      left: posX,
      top: posY,
      behavior: 'smooth'
    })
  }

  return (
    <header id="header">

      <img id="header__logo" src={require('../../assets/Logo.svg')} alt="logo de Mont d'Or"/>
      <input id="header__button" type="button" value="Rejoindre la communauté" />
      <input id="header_scroll_top" type="button" value="▲" onClick={() => scrollToPosition(0, 0)} />

    </header>
  )
}

export default Header