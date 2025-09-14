import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState, useEffect } from "react";

export default function RegisterModal({ onClose, isOpen, onRegister }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister({ name, email, password, avatar });
    resetForm();
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setPassword("");
    setAvatar(null);
  };

  useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("keydown", closeByEscape);
    }
    return () => {
      document.removeEventListener("keydown", closeByEscape);
    };
  }, [isOpen, onClose]);

  return (
    <ModalWithForm
      title="Sign Up"
      buttonText={"Register"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name" className="modal__name_label">
        Name *
        <input
          type="text"
          id="name"
          className="modal__input"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label htmlFor="email" className="modal__name_label">
        Email *
        <input
          type="email"
          id="email"
          className="modal__input"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label htmlFor="password" className="modal__name_label">
        Password *
        <input
          type="password"
          id="password"
          className="modal__input"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>

      <label htmlFor="avatar" className="modal__image_label">
        Avatar URL*
        <input
          type="url"
          id="avatar"
          className="modal__input"
          placeholder="Enter your avatar URL"
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
        />
      </label>
    </ModalWithForm>
  );
}
