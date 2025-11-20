import React, { createContext, useState } from "react";

export const UIContext = createContext();

export const UIProvider = ({ children }) => {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [openList, setOpenList] = useState(null);
  const [currentCode, setCurrentCode] = useState("");
  const [currentCss, setCurrentCss] = useState("");

  return (
    <UIContext.Provider value={{ selectedComponent, setSelectedComponent, openList, setOpenList, currentCode, setCurrentCode, currentCss, setCurrentCss }}>
      {children}
    </UIContext.Provider>
  );
};
