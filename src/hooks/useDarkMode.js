import { useEffect, useState } from "react";

const useDarkMode = () => {
  // Initialize state based on the saved preference in localStorage
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  // Toggle dark mode and update localStorage with the new state
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", newMode); // Save preference
      return newMode;
    });
  };

  // Apply the dark class to the body element when dark mode is enabled
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]); // Runs when `isDarkMode` changes

  return [isDarkMode, toggleDarkMode]; // Return the dark mode state and toggle function
};

export default useDarkMode;
