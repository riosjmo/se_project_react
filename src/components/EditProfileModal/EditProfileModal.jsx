import { useState, useEffect, useContext } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import CurrentUserContext from "../../contexts/CurrentUserContext";

export default function EditProfileModal({ onClose, isOpen, onUpdateUser }) {
    const currentUser = useContext(CurrentUserContext);

    const [name, setName] = useState("");
    const [avatar, setAvatar] = useState("");

    useEffect(() => {
        if (currentUser) {
            setName(currentUser.name || "");
            setAvatar(currentUser.avatar || "");
        }
    }, [currentUser, isOpen]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdateUser({ name, avatar });
    };

    return (
        <ModalWithForm
            title="Edit Profile"
            buttonText={"Save"}
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
        >
            <label>
                Name
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                />
            </label>
            <label>
                Avatar URL
                <input
                    type="url"
                    value={avatar}
                    onChange={(e) => setAvatar(e.target.value)}
                    placeholder="Avatar URL"
                />
            </label>
        </ModalWithForm>
    );
}
    