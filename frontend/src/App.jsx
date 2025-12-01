import React from "react";
import "./App.css";
import { UIProvider } from "./UIContext";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import {
  Background1,
  Background2,
  Background3,
  Card1,
  Card2,
  Gojo,
  Form1,
  Form2,
  background1Src,
  background2Src,
  background3Src,
  card1Src,
  card2Src,
  gojoSrc,
  form1Src,
  form2Src,
  background1Css,
  background2Css,
  background3Css,
  card1Css,
  card2Css,
  gojoCss,
  form1Css,
  form2Css,
  Header,
  Hero,
  Footer,
  Component,
  WithCode,
  LiquidChrome,
} from "./components";

function Home() {
  return (
    <div className="home-page">
      <LiquidChrome baseColor={[0.1, 0.2, 0.2]} speed={0.3} interactive={true} />
      <Header showNav={false} />
      <Hero />
      <Footer />
    </div>
  );
}

function App() {
  const componentRoutes = [
    { path: "background1", Component: Background1, src: background1Src, css: background1Css },
    { path: "background2", Component: Background2, src: background2Src, css: background2Css },
    { path: "background3", Component: Background3, src: background3Src, css: background3Css },
    { path: "card1", Component: Card1, src: card1Src, css: card1Css },
    { path: "card2", Component: Card2, src: card2Src, css: card2Css },
    { path: "gojo", Component: Gojo, src: gojoSrc, css: gojoCss },
    { path: "form1", Component: Form1, src: form1Src, css: form1Css },
    { path: "form2", Component: Form2, src: form2Src, css: form2Css },
  ];

  return (
    <UIProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/components" element={<Component />}>
            {componentRoutes.map(({ path, Component, src, css }) => (
              <Route
                key={path}
                path={path}
                element={
                  <WithCode code={src} css={css}>
                    <Component />
                  </WithCode>
                }
              />
            ))}
          </Route>
        </Routes>
      </Router>
    </UIProvider>
  );
}

export default App;
