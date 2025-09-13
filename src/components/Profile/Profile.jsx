import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";
import "./Profile.css";

export default function Profile({
  onCardClick,
  clothingItems,
  onAddClick,
  onEditProfile,
}) {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar>
          <button className="sidebar__edit-btn" onClick={onEditProfile}>
            Edit Profile
          </button>
        </SideBar>
      </section>
      <section className="profile__clothing-items">
        <ClothesSection
          onCardClick={onCardClick}
          clothingItems={clothingItems}
          onAddClick={onAddClick}
        />
      </section>
    </div>
  );
}
