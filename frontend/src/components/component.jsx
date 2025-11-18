import React, { useContext } from "react";
import { UIContext } from "../UIContext";
import { Link, Outlet } from "react-router-dom";
import "./component.css";
import MainSection from "./MainSection";

function Component() {
  const { openList, setOpenList } = useContext(UIContext);

  function handleClick(listName) {
    setOpenList(openList === listName ? null : listName);
  }

  return (
    <div className="content">
      <aside className="sidebar">
        <h1 className="shiny-text">Index</h1>

        <ul>
          <li>
            <h2 className="shiny-text" onClick={() => handleClick("Background")}>
              Background
            </h2>
            {openList === "Background" && (
              <ul>
                <li><Link to="/components/background1" className="li-link">Background1</Link></li>
                <li><Link to="/components/background2" className="li-link">Background2</Link></li>
                <li><Link to="/components/background3" className="li-link">Background3</Link></li>
              </ul>
            )}
          </li>

          <li>
            <h2 className="shiny-text" onClick={() => handleClick("Cards")}>
              Cards
            </h2>
            {openList === "Cards" && (
              <ul>
                <li><Link to="/components/card1" className="li-link">Card1</Link></li>
                <li><Link to="/components/card2" className="li-link">Card2</Link></li>
                <li><Link to="/components/gojo" className="li-link">Gojo</Link></li>
              </ul>
            )}
          </li>

          <li>
            <h2 className="shiny-text" onClick={() => handleClick("Forms")}>
              Forms
            </h2>
            {openList === "Forms" && (
              <ul>
                <li><Link to="/components/form1" className="li-link">Form1</Link></li>
                <li><Link to="/components/form2" className="li-link">Form2</Link></li>
              </ul>
            )}
          </li>

        </ul>
      </aside>

      <main className="main">
        <MainSection title="Main Preview">
          <Outlet />
        </MainSection>
      </main>
    </div>
  );
}

export default Component;
