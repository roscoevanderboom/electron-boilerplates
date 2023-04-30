import { useState } from "react";
import logoVite from "../../assets/logo-vite.svg";
import logoElectron from "../../assets/logo-electron.svg";
import "../../styles/App.scss";
import { useNavigate } from "react-router-dom";

console.log(
  "[App.tsx]",
  `Hello world from Electron ${process.versions.electron}!`
);

export default function Login() {
  const [count, setCount] = useState(0);
  const nav = useNavigate();

  return (
    <div className="App">
      <div className="logo-box">
        <a
          href="https://github.com/electron-vite/electron-vite-react"
          target="_blank"
        >
          <img
            src={logoVite}
            className="logo vite"
            alt="Electron + Vite logo"
          />
          <img
            src={logoElectron}
            className="logo electron"
            alt="Electron + Vite logo"
          />
        </a>
      </div>
      <h1>Electron + Vite + React</h1>
      <div className="card">
        <button className="btn" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <button className="btn" onClick={() => nav("/home")}>Go to Home Layout</button>
      </div>
      <p className="read-the-docs">
        Click on the Electron + Vite logo to learn more
      </p>
      <div className="flex-center">
        Place static files into the<code>/public</code> folder{" "}
        <img style={{ width: "5em" }} src="./node.svg" alt="Node logo" />
      </div>
    </div>
  );
}
