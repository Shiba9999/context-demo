import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";

const ThemeToggler = () => {
  const [themeMode, setThemeMode] = useContext(ThemeContext);
  console.log("theme",useContext(ThemeContext));
  console.log("themeMode",themeMode);

  return (
    <div
      onClick={() => {
        setThemeMode(themeMode === "light" ? "dark" : "light");
      }}
    >
      <span>{themeMode === "light" ? "Turn Off" : "Lights On"}</span>
    </div>
  );
};

export default ThemeToggler;
