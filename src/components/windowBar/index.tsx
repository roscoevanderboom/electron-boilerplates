import "../../styles/WindowBar.scss";
import { BiHide } from "react-icons/bi";
import { SlClose } from "react-icons/sl";
import { TbArrowsMinimize, TbMaximize } from "react-icons/tb";
import { handleWindow } from "@/utils/handleIPC";

export default function WindowBar() {
  return (
    <div className="navbar">
      <div></div>

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