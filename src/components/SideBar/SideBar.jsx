import "./SideBar.css";
import avatar from "../../assets/avatar.png";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

export default function SideBar({ children }) {
  const currentUser = useContext(CurrentUserContext);
  const username = currentUser ? currentUser.name : "Guest";
  const avatarSrc = currentUser && currentUser.avatar ? currentUser.avatar : avatar;

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <img className="sidebar__avatar" src={avatarSrc} alt={username} />
        <p className="sidebar__username">{username}</p>
      </div>
      <div className="sidebar__buttons">{children}</div>
    </div>
  );
}
