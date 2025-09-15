import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";
import "./Profile.css";

export default function Profile({
  clothingItems,
  onCardClick,
  onAddClick,
  onEditProfile,
  onSignOut,
  onCardLike
}) {
  const currentUser = useContext(CurrentUserContext);

  const userItems = clothingItems.filter(
    (item) => item.owner === currentUser?._id
  );

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
          clothingItems={userItems}
          onAddClick={onAddClick} 
          onCardLike={onCardLike}
        />
      </main>
    </div>
  );
}
