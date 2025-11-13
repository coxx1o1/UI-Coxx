import React, { createContext, useState } from "react";

export const UIContext = createContext();

export const UIProvider = ({ children }) => {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [openList, setOpenList] = useState(null);

  return (
    <UIContext.Provider value={{ selectedComponent, setSelectedComponent, openList, setOpenList }}>
      {children}
    </UIContext.Provider>
  );
};
