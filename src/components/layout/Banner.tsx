import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/Banner.css'
import Button from '../commons/Button/Button';

interface BannerProps {
  bgImg : string,
  slogan: string,
  btnLink: string,
}

const Banner: React.FC<BannerProps> = ({ bgImg, slogan, btnLink }) => {
  const navigate = useNavigate();
  return (
    <div className="banner" style={{ backgroundImage: `url(${bgImg})` }}>
      <h2 className="banner-slogan">{slogan}</h2>
      <Button
        className="banner-button"
        type="button"
        onClick={() => navigate(btnLink)}>
          Ver Catalogo
      </Button>
    </div>
  )
}

export default Banner;