import React from 'react';
import '../../styles/Home.css'
import jade_logo from '../../assets/jade_logo.png';
import Header from '../../components/layout/Header';

interface HomeProps {

}

const Home: React.FC<HomeProps> = (props) => {
  return (
    <div className="home-container">
      <Header
        imgSrc={jade_logo}
        imgAlt="jade-logo"
        title="Hairstyles Studio"
        navList={["Home", "Catalogo", "Agendamento", "Contato"]}
      />
    </div>
  )
}

export default Home;