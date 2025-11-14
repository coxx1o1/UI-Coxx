import React, { useContext } from "react";
import { UIContext } from "../../UIContext";
import Background1 from "./Background1";
import Background2 from "./Background2";
import Background3 from "./Background3";

const BackgroundMain = () => {
  const { selectedComponent } = useContext(UIContext);

  const renderBackground = () => {
    switch (selectedComponent) {
      case "Background1":
        return <Background1 />;
      case "Background2":
        return <Background2 />; 
      case "Background3":
        return <Background3 />;
      default:
        return null;
    }
  };

  return <div className="background-container">{renderBackground()}</div>;
};

export default BackgroundMain;
