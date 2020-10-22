import React, { useState, useEffect } from 'react';

import './Nav.css'

const Nav2 = () => {

  const [previousPosition, setPreviousPosition] = useState('static')
  const [nextPosition, setNextPosition] = useState('fixed')
  const [previousTop, setPreviousTop] = useState('')
  const [nextTop, setNextTop] = useState(0)

  const listenScrollEvent = () => {
    if (window.scrollY > 250) {
      setNextPosition(nextPosition),
      setNextTop(nextTop)
    } else {
      setPreviousPosition(previousPosition),
      setPreviousTop(previousTop)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent)
  })

  return (
    <nav style={{previousPosition, previousTop}}>
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