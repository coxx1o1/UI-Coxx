import React, { useState, useContext, useEffect } from "react";
import "./MainSection.css";
import { UIContext } from "../UIContext";
import { useLocation } from "react-router-dom";

function MainSection({ children }) {
  const [tab, setTab] = useState("preview");
  const { currentCode, currentCss } = useContext(UIContext);
  const location = useLocation();
  const [copiedJsx, setCopiedJsx] = useState(false);
  const [copiedCss, setCopiedCss] = useState(false);

  useEffect(() => {
    setTab("preview");
    setCopiedJsx(false);
    setCopiedCss(false);
  }, [location.pathname]);

  function handleCopy(text, type) {
    navigator.clipboard.writeText(text || "");
    if (type === "jsx") {
      setCopiedJsx(true);
      setTimeout(() => setCopiedJsx(false), 800);
    } else {
      setCopiedCss(true);
      setTimeout(() => setCopiedCss(false), 800);
    }
  }
  return (
  <div className="section-container"
  style={{
    backgroundColor: "#363636ff",
  }}> 
    <section className="main-section"
    style={{
      backgroundColor: "#191919ff",
    }}>
      <header className="section-header">
         <button className={`section-button ${tab === "preview" ? "active" : ""}`} onClick={() => setTab("preview")}>preview</button>
         <button className={`section-button ${tab === "code" ? "active" : ""}`} onClick={() => setTab("code")}>code</button>
         {tab === "code" && (
           <div className="code-toolbar">
             <button className={`toolbar-button ${copiedJsx ? "copied" : ""}`} onClick={() => handleCopy(currentCode, "jsx")}>Copy JSX</button>
             <button className={`toolbar-button ${copiedCss ? "copied" : ""}`} onClick={() => handleCopy(currentCss, "css")}>Copy CSS</button>
           </div>
         )}
      </header>

      <div className="section-body">
        {tab === "preview" ? children : (
          <>
            <pre className="code-view"><code>{currentCode}</code></pre>
            {currentCss && <pre className="code-view"><code>{currentCss}</code></pre>}
          </>
        )}
      </div>
    </section>
    </div   >
  );
}

export default MainSection;
