import React, { useContext } from "react";
import { UIContext } from "../../UIContext";
import Background1 from "./Background1";
import Background2 from "./Background2";
import Background3 from "./Background3";

const BackgroundMain = () => {
  const { selectedComponent } = useContext(UIContext);

  console.log("Selected Component:", selectedComponent); // Debugging log

  return (
    <div>
      {selectedComponent === "Background1" && <Background1 />}
      {selectedComponent === "Background2" && <Background2 />}
      {selectedComponent === "Background3" && <Background3 />}
    </div>
  );
};

export default BackgroundMain;
