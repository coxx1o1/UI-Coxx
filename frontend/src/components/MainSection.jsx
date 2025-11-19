import React from "react";
import "./MainSection.css";

function MainSection({ children }) {
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
         <button className="section-button">preview</button>
      <button className="section-button">code</button>
      </header>

      <div className="section-body">
        {children}
      </div>
    </section>
    </div   >
  );
}

export default MainSection;
