import React, { useContext } from "react";

import { UIContext } from "../../UIContext";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Gojo from "./gojo";

const CardMain = () => {
  const { selectedComponent } = useContext(UIContext);

  const renderCard = () => {
    switch (selectedComponent) {
      case "Card1":
        return <Card1 />;
      case "Card2":
        return <Card2 />;
      case "Gojo":
        return <Gojo />;
      default:
        return null;
    }
  };

  return <div className="card-container">{renderCard()}</div>;
};

export default CardMain;