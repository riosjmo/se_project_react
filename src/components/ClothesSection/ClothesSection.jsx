import ItemCard from "../ItemCard/ItemCard";
import "./ClothesSection.css";

export default function ClothesSection({ onCardClick, clothingItems, onAddClick }) {
  return (
    <div className="clothes-section">
      <div className="clothes-section__title">
        <p className="clothes-section__item">Your Items</p>
        <button className="clothes-section__btn" onClick={onAddClick}>
          + Add New
        </button>
      </div>
      <ul className="clothes-section__items">
        {clothingItems.map((item) => {
          return (
            <ItemCard key={item._id} item={item} onCardClick={onCardClick} />
          );
        })}
      </ul>
    </div>
  );
}
