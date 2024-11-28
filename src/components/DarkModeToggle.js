import React from "react";
import useDarkMode from "../hooks/useDarkMode";

const DarkModeToggle = () => {
  // State and function for toggling dark mode
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  return (
    // Button for toggling between dark and light modes
    <button
      className={`dark-mode ${isDarkMode ? "dark" : ""}`}
      onClick={toggleDarkMode}
    >
      {isDarkMode ? "Light Mode" : "Dark Mode"} {/* Button text changes based on current mode */}
    </button>
  );
};

export default DarkModeToggle;
