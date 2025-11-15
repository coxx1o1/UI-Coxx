import React, { useContext } from "react";
import { UIContext } from "../UIContext";
import BackgroundMain from "./background/BackgroundMain.jsx";
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
          <h2 className="shiny-text" onClick={() => handleClick("Background")}>
            Background
          </h2>
          {openList === "Background" && (
            <ul className="">
              <li onClick={() => setSelectedComponent("Background1")}>
                Background1
              </li>
              <li onClick={() => setSelectedComponent("Background2")}>
                Background2
              </li>
              <li onClick={() => setSelectedComponent("Background3")}>
                Background3
              </li>
            </ul>
          )}
        </ul>
      </aside>

      <main className="main">
        <MainSection title="Main Display">
          <h1 className="shiny-text">Main Preview</h1>
          <BackgroundMain />
        </MainSection>
      </main>
    </div>
  );
}

export default Component;
