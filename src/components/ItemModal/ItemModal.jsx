import "./ItemModal.css";
import close from "../../assets/close.svg";

function ItemModal({ activeModal, onClose, card }) {
  if (activeModal !== "preview" || !card) return null;

  return (
    <div className={`modal ${activeModal === "preview" && "modal__opened"}`}>
      <div className="modal__content modal__content_type_image">
        <button onClick={onClose} type="button" className="modal__close">
          <img src={close} alt="close" className="modal__close_btn" />
        </button>
        <img src={card.imageUrl} alt="article of clothing" className="modal__image" />
        <div className="modal__footer">
          <h2 className="modal__caption">{card.name}</h2>
          <p className="modal__weather">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
