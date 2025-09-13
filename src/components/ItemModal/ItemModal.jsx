import "./ItemModal.css";
import close from "../../assets/close.svg";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function ItemModal({ activeModal, onClose, card, onDeleteCard }) {
  if (activeModal !== "preview" || !card) return null;

  const currentUser = useContext(CurrentUserContext);

  const isOwn = currentUser && card.owner === currentUser._id;

  return (
    <div className={`modal ${activeModal === "preview" && "modal__opened"}`}>
      <div className="modal__item modal__item_type_image">
        <button onClick={onClose} type="button" className="modal__close">
          <img src={close} alt="close" className="modal__close_btn" />
        </button>
        <img
          src={card.imageUrl}
          alt="article of clothing"
          className="modal__image"
        />
        <div className="modal__footer">
          <h2 className="modal__caption">{card.name}</h2>
          <p className="modal__weather">Weather: {card.weather}</p>
          {isOwn && (
            <button
              className="item-modal__delete-btn"
              onClick={() => onDeleteCard(card)}
            >
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
