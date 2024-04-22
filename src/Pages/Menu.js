import { Outlet, Link } from "react-router-dom";
import VidPlaylist from "../Components/VidPlaylist";
import Dropdown from "../Components/Dropdown";
import "../index.css";
const Menu = () => {
  return (
    <>
      <nav className="top-menu">
        <div className="left-justified">
          <VidPlaylist />
        </div>
        <div className="right-justified">
         
          {/* In theory, these entries should be grabbed from the current account's settings db entry
           <Dropdown 
          title={"Current activity:"}
          uniqueID={"activity_selector"}
          entries={["🎧 Chilling", "🧑‍💻 Working", "🏃Exercising", "🫧 Doing Chores", "💤 Sleeping", "🚋 In Transit"]}/>
           */}
        </div>
      </nav>

      <Outlet />
    </>
  )
};

export default Menu;