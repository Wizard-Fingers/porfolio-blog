"use client";
import { useEffect, useState } from "react";
import { FaBrain } from "react-icons/fa";
import Button from "./buttons";

export default function DyslexicTextToggle() {
  const [isDyslexicMode, setIsDyslexicMode] = useState(false);

  useEffect(() => {
    const storedDyslexicMode = localStorage.getItem("dyslexicMode");
    if (storedDyslexicMode === "true") {
      setIsDyslexicMode(true);
      document.body.classList.add("open-dyslexic");
    }
  }, []);

  const toggleDyslexicMode = () => {
    const newDyslexicMode = !isDyslexicMode;
    setIsDyslexicMode(newDyslexicMode);
    localStorage.setItem("dyslexicMode", newDyslexicMode.toString());
    document.body.classList.toggle("open-dyslexic");
  };

  return (
    <Button
      onClick={toggleDyslexicMode}
      variant="outlined"
      className="flex items-center space-x-2"
    >
      <FaBrain className="text-lightCol4 dark:text-darkCol4" />
      <span className="text-lightCol2 dark:text-darkCol2">
        {isDyslexicMode ? "Regular Font" : "Dyslexic Font"}
      </span>
    </Button>
  );
}
