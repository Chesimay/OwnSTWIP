import { Outlet, Link } from "react-router-dom";
import VidPlaylist from "../Components/VidPlaylist";
import "../index.css";
const Menu = () => {
  return (
    <>
      <nav className="left-justified">
          <VidPlaylist />
      </nav>

      <Outlet />
    </>
  )
};

export default Menu;