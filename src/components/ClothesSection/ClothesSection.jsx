import ItemCard from "../ItemCard/ItemCard";
import { defaultClothingItems } from "../../utils/constants";
import "./ClothesSection.css";
import "../Profile/Profile.css";

export default function ClothesSection({ onCardClick }) {
  return (
    <div className="clothes-section">
      <div className="clothes-section__title">
        <p className="clothes-section__item">Your Items</p>
        <button className="clothes-section__btn">+ Add New</button>
      </div>
      <ul className="clothes-section__items">
        {defaultClothingItems.map((item) => {
          return (
            <ItemCard key={item._id} item={item} onCardClick={onCardClick} />
          );
        })}
      </ul>
    </div>
  );
}
