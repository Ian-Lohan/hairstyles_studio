import React from "react";
import "../../styles/Header.css";
import Image from "../../components/commons/Image/Image";
import { Link } from "react-router-dom";

interface HeaderProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  navList: Array<string>;
}

const Header: React.FC<HeaderProps> = ({
  imgSrc,
  imgAlt,
  title,
  navList,
}) => {
  return (
    <header>
      <div className="header-left">
        <Link to="/home" style={{ textDecoration: "none"}} className="header-left-wrapper">
          <Image source={imgSrc} alt={imgAlt} className="header-image" />
          <h2 className="header-title">{title}</h2>
        </Link>
      </div>
      <div className="header-right">
        <nav className="navlist">
          {navList.map((item, i) => (
            <a href="#{item}"key={i}>{item}</a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;