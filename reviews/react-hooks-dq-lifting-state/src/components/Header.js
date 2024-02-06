import React from "react";
import Menu from "./Menu";

function Header({ darkMode, toggleDarkMode }) {
  return (
    <div className={`ui fixed menu ${darkMode ? "inverted" : ""}`}>
      <div className="menu item">Fwitter</div>
      <div className="right menu">
        <Menu darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </div>
    </div>
  );
}

export default Header;
