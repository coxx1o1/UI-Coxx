import React, { useContext } from "react";
import { UIContext } from "../UIContext"; // import context
import BackgroundMain from "./background/BackgroundMain.jsx";
import FormMain from "./form/FormMain.jsx";
import CardMain from "./card/CardMain.jsx";
import "./component.css";
import MainSection from "./MainSection";

function Component() {
  const { openList, setOpenList, setSelectedComponent } = useContext(UIContext);

  function handleClick(listName) {
    setOpenList(openList === listName ? null : listName);
  }

  return (
    <div className="content">
      <aside className="sidebar">
        <h1 className="shiny-text">Index</h1>
        <ul>
          <h2 className="shiny-text" onClick={() => handleClick("Background")}>Background</h2>
          {openList === "Background" && (
            <ul>
              <li onClick={() => setSelectedComponent("Background1")}>Background1</li>
              <li onClick={() => setSelectedComponent("Background2")}>Background2</li>
              <li onClick={() => setSelectedComponent("Background3")}>Background3</li>
            </ul>
          )}

          <h2 className="shiny-text" onClick={() => handleClick("Cards")}>Cards</h2>
          {openList === "Cards" && (
            <ul>
              <li onClick={() => setSelectedComponent("Card1")}>Card1</li>
              <li onClick={() => setSelectedComponent("Card2")}>Card2</li>
              <li onClick={() => setSelectedComponent("Gojo")}>Gojo</li>
            </ul>
          )}

          <h2 className="shiny-text" onClick={() => handleClick("Forms")}>Forms</h2>
          {openList === "Forms" && (
            <ul>
              <li onClick={() => setSelectedComponent("Form1")}>Form1</li>
              <li onClick={() => setSelectedComponent("Form2")}>Form2</li>
            </ul>
          )}
        </ul>
      </aside>

      <main className="main">
        <MainSection title="Main Display">
          <h1 className="shiny-text">Main Preview</h1>
          <BackgroundMain />
          <CardMain />
          <FormMain />
        </MainSection>
      </main>
    </div>
  );
}

export default Component;
