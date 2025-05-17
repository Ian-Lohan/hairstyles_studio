import React from 'react';
import '../../../styles/CatalogueCard.css';
import Button from '../../commons/Button/Button';

interface CatalogueCardProps {
  image?: string | 0,
  title?: string | "Item",
  price?: number | 0,
  duration?: number | 0,
}

const CatalogueCard: React.FC<CatalogueCardProps> = ({ image, title, price, duration }) => {
  return (
    <div className="catalogue-card" id={`${title}`}>
      <div className="card-image" style={{backgroundImage: `url(${image})`}}></div>
      <h2 className="card-title">{title}</h2>
      <div className="card-values">
        <p className="price">R${price}</p>
        <p className="duration">{duration}h</p>
      </div>
      <Button
        type="button"
        onClick={() => {}}
        className="button"
      >
        Agendar
      </Button>
    </div>
  )
}

export default CatalogueCard;