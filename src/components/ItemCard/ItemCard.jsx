import "./ItemCard.css";
import "../Main/Main.css";

function ItemCard({ item, onCardClick }) {
  const handleCardClick = () => {
    onCardClick(item);
  };

  return (
    <div className="item-card">
      <h2 className="item-card__name">{item.name}</h2>
      <img
        onClick={handleCardClick}
        className="item-card__image"
        src={item.imageUrl}
        alt={item.name}
      />
    </div>
  );
}

export default ItemCard;
