import React from "react";
import "./MainSection.css";

function MainSection({ title, children }) {
  return (
    <section className="main-section">
      <header className="section-header">
        <h2>{title}</h2>
      </header>

      <div className="section-body">
        {children}
      </div>
    </section>
  );
}

export default MainSection;
