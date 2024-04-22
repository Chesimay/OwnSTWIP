import { Outlet, Link } from "react-router-dom";
import VidPlaylist from "../Components/VidPlaylist";
import "../index.css";
const Menu = () => {
  return (
    <>
      <nav className="top-menu">
        <div className="left-justified">
          <VidPlaylist />
        </div>
      </nav>

      <Outlet />
    </>
  )
};

export default Menu;