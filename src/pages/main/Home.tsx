import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/Home.css'
import jade_logo from '../../assets/jade_logo.png';
import Header from '../../components/layout/Header';
import Banner from '../../components/layout/Banner';
import Catalogue from '../../pages/main/Catalogue';
import Button from '../../components/commons/Button/Button';

interface HomeProps {
}

const Home: React.FC<HomeProps> = (props) => {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      <Header
        imgSrc={jade_logo}
        imgAlt="jade-logo"
        title="Hairstyles Studio"
        navList={["Home", "Catalogo", "Agendamento", "Contato"]}
      />
      <Banner
        bgImg={jade_logo}
        slogan="Tornamos o seu cabelo em uma joia preciosa!"
        btnLink='/catalogo'
      />
      <div className="section">
        <h2 className="section-title">Catalogo</h2>
        <p className="section-description">Veja algumas das opções de tranças no nosso catalogo!</p>
        <Catalogue

        />
        <Button
          className="catalogue-see-more"
          type="button"
          onClick={() => navigate('/catalogo')}
        >
          Veja Mais
        </Button>
      </div>
    </div>
  )
}

export default Home;