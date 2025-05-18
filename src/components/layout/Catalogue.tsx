import React from "react";
import "../../styles/Catalogue.css";
import jade from "../../assets/jade.png";
import CatalogueCard from "../../components/unique/CatalogueCard/CatalogueCard";

interface CatalogoProps {}

const Catalogue: React.FC<CatalogoProps> = (props) => {
  return (
    <div className="catalogue-container">
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
    </div>
  );
};

export default Catalogue;
