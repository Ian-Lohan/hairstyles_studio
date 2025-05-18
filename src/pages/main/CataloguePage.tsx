import React from "react";
import "../../styles/Catalogue.css";
import jade from "../../assets/jade.png";
import Header from "../../components/layout/Header";
import CatalogueCard from "../../components/unique/CatalogueCard/CatalogueCard";
import Footer from "../../components/layout/Footer";

interface CataloguePageProps {}

const CataloguePage: React.FC<CataloguePageProps> = (props) => {
  return (
    <div className="catalogue-container">
      <Header />
      <div className="catalogue">
        <CatalogueCard
          image={jade}
          title="Trança"
          price={100.0}
          duration={2}
        />
        <CatalogueCard
          image={jade}
          title="Trança"
          price={100.0}
          duration={2}
        />
        <CatalogueCard
          image={jade}
          title="Trança"
          price={100.0}
          duration={2}
        />
        <CatalogueCard
          image={jade}
          title="Trança"
          price={100.0}
          duration={2}
        />
        <CatalogueCard
          image={jade}
          title="Trança"
          price={100.0}
          duration={2}
        />
        <CatalogueCard
          image={jade}
          title="Trança"
          price={100.0}
          duration={2}
        />
      </div>
      <Footer />
    </div>
  );
};

export default CataloguePage;
