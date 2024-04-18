import { Outlet, Link } from "react-router-dom";
import VidPlaylist from "../Components/VidPlaylist";

const Menu = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
          <VidPlaylist />

        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Menu;