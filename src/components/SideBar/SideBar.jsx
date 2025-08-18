import "./SideBar.css";
import avatar from "../../assets/avatar.png";
import "../Profile/Profile.css"

export default function SideBar() {
  return (
    <div className="sidebar">
      <img className="sidebar__avatar" src={avatar} alt="Default avatar" />
      <p className="sidebar__username">Terrence Tegegne</p>
    </div>
  );
}
