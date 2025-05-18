import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Home.css";
import jade_logo from "../../assets/jade_logo.png";
import Header from "../../components/layout/Header";
import Banner from "../../components/layout/Banner";
import Catalogue from "../../components/layout/Catalogue";
import Button from "../../components/commons/Button/Button";
import Form from "../../components/layout/Form";
import Label from "../../components/commons/Label/Label";
import Input from "../../components/commons/Input/Input";
import Footer from "../../components/layout/Footer";

interface HomeProps {}

const Home: React.FC<HomeProps> = (props) => {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      <Header />
      <Banner
        bgImg={jade_logo}
        slogan="Tornamos o seu cabelo em uma joia preciosa!"
        btnLink="/catalogo"
      />
      <div className="section">
        <h2 className="section-title">Catalogo</h2>
        <p className="section-description">
          Veja algumas das opções de tranças no nosso catalogo!
        </p>
        <Catalogue />
        <Button
          className="catalogue-see-more"
          type="button"
          onClick={() => navigate("/catalogo")}
        >
          Veja Mais
        </Button>
      </div>
      <div className="section">
        <h2 className="section-title">Agendamento</h2>
        <p className="section-description">Realize agora o seu agendamento!</p>
        <Form className="schedule-form" onSubmit={() => {}}>
          <div className="form-field">
            <Label value="Nome" htmlFor="nome" />
            <Input type="text" placeholder="Insira seu nome" id="nome" />
          </div>
          <div className="form-field">
            <Label value="Número" htmlFor="numero" />
            <Input type="text" placeholder="Insira seu número" id="numero" />
          </div>
          <div className="form-field">
            <Label value="Cabelo" htmlFor="cabelo" />
            <Input type="dropdown" placeholder="Escolha um item" id="cabelo" />
          </div>
          <div className="form-field">
            <Label value="Horário" htmlFor="horario" />
            <Input
              type="datetime-local"
              placeholder="Escolha um horário disponível"
              id="horario"
            />
          </div>
          <Button className="form-button" type="submit" onClick={() => {}}>
            Agendar
          </Button>
        </Form>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
