import React, { useState, useEffect } from 'react';

import './Nav.css'

const Nav2 = () => {

  const [position, setPosition] = useState('static')
  const [top, setTop] = useState('')

  listenScrollEvent = () => {
    if (window.scrollY > 250) {
      setPosition("fixed"),
      setTop(0)
    } else {
      setPosition("static"),
      setTop("previousTop")
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent)
  })

  return (
    <nav style={{position, top}}>
      <ul>
        <a href="#"><li>ACCUEIL</li></a>
        <a href="#"><li>RECETTES</li></a>
        <a href="#"><li>ARTICLES</li></a>
        <a href="#"><li>COMMUNAUTÉ</li></a>
        <a href="#"><li>À PROPOS</li></a>
        <a href="#"><li>CONTACT</li></a>
      </ul>
    </nav>
  )
}

export default Nav2;