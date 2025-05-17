import React from "react";
import "../../styles/Catalogue.css";
import CatalogueCard from "../../components/unique/CatalogueCard/CatalogueCard";

import image from "../../assets/jade_logo.png";

interface CatalogoProps {}

const Catalogue: React.FC<CatalogoProps> = (props) => {
  return (
    <div className="catalogue">
      <CatalogueCard image={image} title="Trança" price={100.0} duration={2} />
      <CatalogueCard image={image} title="Trança" price={100.0} duration={2} />
      <CatalogueCard image={image} title="Trança" price={100.0} duration={2} />
      <CatalogueCard image={image} title="Trança" price={100.0} duration={2} />
      <CatalogueCard image={image} title="Trança" price={100.0} duration={2} />
      <CatalogueCard image={image} title="Trança" price={100.0} duration={2} />
    </div>
  );
};

export default Catalogue;
