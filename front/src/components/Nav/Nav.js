// Librairies
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
// Style
import './Nav.css'

const Nav = () => {

  // States
  const [isSticky, setIsSticky] = useState(false)

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
    // If the scroll height is greater than the given height, nav become sticky
    window.pageYOffset > height ? setIsSticky(true) : setIsSticky(false)
  }

  return (
    <nav className={isSticky ? 'Sticky-Nav' : ''}>
      <ul>
        <Link to="/"><li>ACCUEIL</li></Link>
        <Link to="/recipes"><li>RECETTES</li></Link>
        <Link to="/"><li>COMMUNAUTÉ</li></Link>
        <Link to="/"><li>À PROPOS</li></Link>
        <Link to="/"><li>CONTACT</li></Link>
      </ul>
    </nav>
  )

}

export default Nav