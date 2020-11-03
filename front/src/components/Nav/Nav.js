import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './Nav.css'

class Nav extends Component {
  state = {
    position: "static",
    top: ""
  }

  listenScrollEvent = () => {
    if (window.scrollY > 200) {
      this.setState({position: "fixed", top: 0})
    } else {
      this.setState({position: "static", top: ""})
    }
  };

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  };
  render() {
    return (
      <nav style={{position: this.state.position, top: this.state.top}}>
        <ul>
          <Link to="./"><li>ACCUEIL</li></Link>
          <Link to="./Recipes"><li>RECETTES</li></Link>
          <a href="#"><li>COMMUNAUTÉ</li></a>
          <a href="#"><li>À PROPOS</li></a>
          <a href="#"><li>CONTACT</li></a>
        </ul>
      </nav>
    )
  }
}

export default Nav