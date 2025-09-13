import "./ItemCard.css";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import likeIcon from "../../assets/like.svg";
import likedIcon from "../../assets/liked.svg";

function ItemCard({ item, onCardClick, onCardLike }) {
  const currentUser = useContext(CurrentUserContext);

  const isLiked =
    currentUser && item.likes && item.likes.includes(currentUser._id);

  const itemLikeButtonClassName = `item-card__like-button ${
    isLiked ? "item-card__like-button_active" : ""
  }`;

  const handleCardClick = () => {
    onCardClick(item);
  };

  const handleCardLike = () => {
    if (!currentUser) return;
    onCardLike(item);
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
      {currentUser && (
      <button
        className={itemLikeButtonClassName}
        onClick={handleCardLike}
        disabled={!currentUser}
      >
        <img
          src={isLiked ? likedIcon : likeIcon}
          alt={isLiked ? "Liked" : "Like"}
          className="item-card__like-icon"
        />
      </button>
      )}
    </div>
  );
}

export default ItemCard;
