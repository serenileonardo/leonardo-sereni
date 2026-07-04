import { useEffect, useState } from "react";
import logo from "../assets/logo.png";

export default function Loader() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(true);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loader ${hide ? "loader-hide" : ""}`}>
      <img src={logo} alt="Logo" className="loader-logo" />

      <div className="loader-bar">
        <div className="loader-progress"></div>
      </div>

      <p className="loader-text">
        Leonardo Sereni · Web Developer
      </p>
    </div>
  );
}