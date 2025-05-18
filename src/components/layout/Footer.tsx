import React from "react";
import "../../styles/Footer.css";
import { Link } from "react-router-dom";
import instagram from "../../assets/instagram.png";

interface FooterProps {}

const Footer: React.FC<FooterProps> = (props) => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-about">
          <h2 className="footer-about-title">Hairstyles Studio</h2>
          <p className="footer-about-description">
            Somos um salão de beleza especializado em tranças. Venha agora
            marcar o seu atendimento e torne o seu cabelo em uma joia preciosa!
          </p>
        </div>
        <div className="footer-navigation">
          <h3 className="footer-navigation-title">Acesso Rápido</h3>
          <div className="footer-navigation-links">
            <Link
              to="/home"
              style={{ textDecoration: "none" }}
              className="footer-link"
            >
              Home
            </Link>
            <Link
              to="/catalogo"
              style={{ textDecoration: "none" }}
              className="footer-link"
            >
              Catalogo
            </Link>
            <Link
              to="/agendamento"
              style={{ textDecoration: "none" }}
              className="footer-link"
            >
              Agendamento
            </Link>
            <Link
              to="/contato"
              style={{ textDecoration: "none" }}
              className="footer-link"
            >
              Contato
            </Link>
          </div>
        </div>
        <div className="footer-socials">
          <h3 className="footer-socials-title">Contato</h3>
          <a href="https://www.instagram.com/jyhairstyles/" className="contato">
            <img src={instagram}></img>
          </a>
        </div>
      </div>
      <div className="footer-lower">
        Hairstyles Studio @ 2025; Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
