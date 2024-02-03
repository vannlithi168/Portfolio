// DarkModeContext.js
import React, { createContext, useContext, useState } from "react";

const DarkModeContext = createContext();

const colorOptions = [
  { background: "#333", text: "white", color: "#1C1C22" },
  { background: "#F0F2F5", text: "black", color: "#F8F8F8" },
];

export const DarkModeProvider = ({ children }) => {
  const [colorIndex, setColorIndex] = useState(0);

  const toggleDarkMode = () => {
    setColorIndex((prevIndex) => (prevIndex + 1) % colorOptions.length);
  };

  return (
    <DarkModeContext.Provider
      value={{ darkMode: colorOptions[colorIndex], toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  }
  return context;
};
