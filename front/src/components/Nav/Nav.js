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
          <Link to="./recipes"><li>RECETTES</li></Link>
          <Link><li>COMMUNAUTÉ</li></Link>
          <Link><li>À PROPOS</li></Link>
          <Link><li>CONTACT</li></Link>
        </ul>
      </nav>
    )
  }
}

export default Nav