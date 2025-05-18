import React from "react";
import "../../styles/Header.css";
import Image from "../../components/commons/Image/Image";
import { Link } from "react-router-dom";
import logo from "../../assets/jade_logo.png";

interface HeaderProps {
}

const Header: React.FC<HeaderProps> = ( props ) => {
  return (
    <header>
      <div className="header-left">
        <Link
          to="/home"
          style={{ textDecoration: "none" }}
          className="header-left-wrapper"
        >
          <Image source={logo} alt="header-logo" className="header-image" />
          <h2 className="header-title">Hairstyles Studio</h2>
        </Link>
      </div>
      <div className="header-right">
        <nav className="navlist">
          <Link
            to="/home"
            style={{ textDecoration: "none" }}
            className="header-navlist-item"
          >
            Home
          </Link>
          <Link
            to="/catalogo"
            style={{ textDecoration: "none" }}
            className="header-navlist-item"
          >
            Catalogo
          </Link>
          <Link
            to="/agendamento"
            style={{ textDecoration: "none" }}
            className="header-navlist-item"
          >
            Agendamento
          </Link>
          <Link
            to="/contato"
            style={{ textDecoration: "none" }}
            className="header-navlist-item"
          >
            Contato
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
