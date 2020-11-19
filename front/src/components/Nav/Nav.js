// Librairies
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
// Style
import './Nav.css'

const Nav = () => {

  // States
  const [isSticky, setIsSticky] = useState(false)
  const [burgerOpened, setBurgerOpened] = useState(false)

  // useEffect acting like componentDidMount + componentWillUnmount
  useEffect(() => {
    // Get element's Y position on the page
    const element = document.querySelector('nav')
    const height = element.offsetTop
    // Event listener to decide if the menu is sticky or not
    window.addEventListener('scroll', () => handleScroll(height))

    // Remove the event listener whenever we destroy the component
    return () => window.removeEventListener('scroll', () => handleScroll(height))
  }, [])

  // Scroll handle function
  const handleScroll = height => {
    if (window.innerWidth > 576) {
      // If the scroll height is greater than the given height, nav become sticky
      window.pageYOffset > height ? setIsSticky(true) : setIsSticky(false)
    }
  }

  const hideBurger = () => {
    document.querySelector('#Nav-Checkbox').checked = false
  }

  return (
    <nav className={`Nav ${isSticky ? 'Nav-Sticky' : ''}`}>
      <label htmlFor="Nav-Checkbox" className="Nav-Menu-Toggle">≡ Menu</label>
      <input type="checkbox" id="Nav-Checkbox" className="Nav-Checkbox" />
      <div className="Nav-Link-List">
        <Link className="Nav-Link" to="/" onClick={hideBurger}>Accueil</Link>
        <Link className="Nav-Link" to="/recipes" onClick={hideBurger}>Recettes</Link>
        <Link className="Nav-Link" to="/" onClick={hideBurger}>Communauté</Link>
        <Link className="Nav-Link" to="/" onClick={hideBurger}>À propops</Link>
        <Link className="Nav-Link" to="/" onClick={hideBurger}>Contact</Link>
      </div>
    </nav>
  )

}

export default Nav