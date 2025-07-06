import { useState } from "react";
import "./ThemeSwitch.css";

export const ThemeSwitch = () => {
  const [theme, setTheme] = useState("light");
  /* response[0]; // theme: light
     response[1]; // setTheme() */
  /* let theme = "light"; */
  const onDarkClick = () => {
    setTheme("dark");
    /* theme = "dark";
    onSwitch(theme); */
  };
  const onLightClick = () => {
    setTheme("light");
    /* theme = "light";
    onSwitch(theme); */
  };
  
  return (
    <div className="theme-switch">
      <div className="theme-switch__actions">
        <button
          onClick={onDarkClick}
          className={`theme-swith__button ${
            theme === "dark" ? "theme-switch__button_active" : ""
          }`}
        >
          Dark
        </button>
        <button
          onClick={onLightClick}
          className={`theme-swith__button ${
            theme === "light" ? "theme-switch__button_active" : ""
          }`}
        >
          Light
        </button>
      </div>
      <div className="theme-switch__value">{theme}</div>
    </div>
  );
};
