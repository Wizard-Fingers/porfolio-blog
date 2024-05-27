"use client";
import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import Button from "./buttons";

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedDarkMode = localStorage.getItem("darkMode");
    if (storedDarkMode === "true") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode.toString());
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };
  return (
    <Button
      onClick={toggleDarkMode}
      variant="outlined"
      className="flex items-center space-x-2"
    >
      {isDarkMode ? (
        <>
          <FaSun className="text-lightCol3" />
          <span className="text-darkCol2">Light Mode</span>
        </>
      ) : (
        <>
          <FaMoon className="text-darkCol3" />
          <span className="text-lightCol2">Dark Mode</span>
        </>
      )}
    </Button>
  );
}
