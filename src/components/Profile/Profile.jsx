import { useEffect, useState } from "react";
import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";
import "./Profile.css";
import { getItems } from "../../utils/api";

export default function Profile({ onCardClick }) {
  const [clothingItems, setClothingItems] = useState([]);

  useEffect(() => {
    getItems().then((items) => setClothingItems(items));
  }, []);

  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar />
      </section>
      <section className="profile__clothing-items">
        <ClothesSection
          onCardClick={onCardClick}
          clothingItems={clothingItems}
        />
      </section>
    </div>
  );
}
