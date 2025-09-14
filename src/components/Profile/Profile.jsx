import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";
import "./Profile.css";

export default function Profile({
  onCardClick,
  clothingItems,
  onAddClick,
  onEditProfile,
  onSignOut,
}) {
  return (
    <div className="profile">
      <aside className="profile__sidebar">
        <SideBar>
          <button className="sidebar__edit-btn" onClick={onEditProfile}>
            Edit Profile
          </button>
          <button className="sidebar__signout-btn" onClick={onSignOut}>
            Sign Out
          </button>
        </SideBar>
      </aside>
      <main className="profile__clothing-items">
        <ClothesSection
          onCardClick={onCardClick}
          clothingItems={clothingItems}
          onAddClick={onAddClick}
        />
      </main>
    </div>
  );
}