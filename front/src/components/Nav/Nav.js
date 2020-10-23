import React, { Component } from 'react';

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
}

export default Nav