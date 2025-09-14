import "./LoginModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState, useEffect } from "react";

export default function LoginModal({ onClose, isOpen, onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ email, password });
    resetForm();
  };

  const resetForm = () => {
    setEmail("");
    setPassword("");
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
      title="Log In"
      buttonText={"Log In"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label htmlFor="email" className="modal__name_label">
        Email
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
      <label htmlFor="password" className="modal__image_label">
        Password
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
    </ModalWithForm>
  );
}
