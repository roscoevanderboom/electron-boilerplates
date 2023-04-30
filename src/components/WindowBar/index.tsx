import "../../styles/WindowBar.scss";
import { Link } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import { BiHide } from "react-icons/bi";
import { SlClose } from "react-icons/sl";
import { TbArrowsMinimize, TbMaximize } from "react-icons/tb";
import Update from "../update";
import { handleWindow, handleWindowbarMenu } from "src/utils/handleIPC";

export default function WindowBar() {
  return (
    <div className="navbar">
      <div>
        <div className="dropdown">
          <button className="dropbtn">
            Menu <FaCaretDown />
          </button>
          <div className="dropdown-content">
            <span onClick={() => handleWindowbarMenu("reload")}>
              Reload page
            </span>
            <span onClick={() => handleWindowbarMenu("devTools")}>
              Show dev tools
            </span>
            <Update />
            <span onClick={() => handleWindowbarMenu("exit")}>Exit</span>
          </div>
        </div>

        <Link to="/login">
          <button className="navbar-link">Login</button>
        </Link>
        <Link to="/home/profile">
          <button className="navbar-link">Profile</button>
        </Link>
        <Link to="/home/settings">
          <button className="navbar-link">Setting</button>
        </Link>
      </div>

      <div className="window-controls-container">
        <button className="navbar-link" onClick={() => handleWindow("hide")}>
          <BiHide />
        </button>
        <button
          className="navbar-link"
          onClick={() => handleWindow("minimize")}
        >
          <TbArrowsMinimize />
        </button>
        <button
          className="navbar-link"
          onClick={() => handleWindow("maximize")}
        >
          <TbMaximize />
        </button>
        <button className="navbar-link" onClick={() => handleWindow("close")}>
          <SlClose />
        </button>
      </div>
    </div>
  );
}

{
}
