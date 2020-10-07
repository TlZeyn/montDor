import React from 'react';

import './Footer.css'

const Footer = () => {
  return (
    <section id="footer">

      <div id="footer__left">
        <h3>EN SAVOIR PLUS</h3>
        <p>Mentions légales</p>
        <p>Contact</p>
        <p>À propos</p>
      </div>

      <div id="footer__middle">
        <h3>SE CONNECTER</h3>
        <div id="footer__middle-icones">
          <a href="#">
            <div className="footer__middle-icones--circle">
            <i class="fab fa-twitter"></i>
            </div>
          </a>
          <a href="#">
            <div className="footer__middle-icones--circle">
            <i class="fab fa-facebook-f"></i>
            </div>
          </a>
          <a href="#">
            <div className="footer__middle-icones--circle">
            <i class="fab fa-instagram"></i>
            </div>
          </a>
          <a href="#">
            <div className="footer__middle-icones--circle">
            <i class="fab fa-discord"></i>
            </div>
          </a>
        </div>
      </div>

      <div id="footer__right">
        <img id="footer__right-logo" src={require('../assets/logo.png')} alt="logo de Mont d'Or"/>
        <p>Copyright 2020 by PTW</p>
      </div>

    </section>
  )
}

export default Footer