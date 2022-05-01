import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Encontre as melhores soluções de entrega em  Express Js
        </p>

      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Contate-nos</h2>
            <Link to="/"> Contatos Úteis </Link>
            <Link to="/"> Suporte </Link>
            <Link to="/"> Parceiros </Link>
            <Link to="/"> Termos e Condições </Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2> Redes Sociais </h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">LinkedIn</Link>
          </div>
          <div class="footer-link-items">
            <h2> Fala Conosco </h2>
            <Link to="/"> Duvidas Frequentes </Link>
            <Link to="/"> Suporte ao Cliente </Link>
            <Link to="/"> Links Úteis </Link>
            <Link to="/"> Escreva-nos </Link>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              Express Js Transportes
            </Link>
          </div>
          <small class="website-rights">Express Js Transportes © 2022</small>
          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              class="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
