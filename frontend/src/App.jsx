import React from "react";
import "./App.css";
import { UIProvider } from "./UIContext";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Nav from "./components/nav.jsx";
import Component from "./components/Component.jsx";
import LiquidChrome from "./components/LiquidChrome.jsx";
import Test from "./components/test.jsx";
import Footer from "./components/footer.jsx";
import Hero from "./components/Hero.jsx";
import Background1 from "./components/background/Background1.jsx";
import Background2 from "./components/background/Background2.jsx";
import Background3 from "./components/background/Background3.jsx";
import Card1 from "./components/card/Card1.jsx";
import Card2 from "./components/card/Card2.jsx";
import Gojo from "./components/card/gojo.jsx";
import Form1 from "./components/form/Form1.jsx";
import Form2 from "./components/form/Form2.jsx";
import WithCode from "./components/WithCode.jsx";
import background1Src from "./components/background/Background1.jsx?raw";
import background2Src from "./components/background/Background2.jsx?raw";
import background3Src from "./components/background/Background3.jsx?raw";
import card1Src from "./components/card/Card1.jsx?raw";
import card2Src from "./components/card/Card2.jsx?raw";
import gojoSrc from "./components/card/gojo.jsx?raw";
import form1Src from "./components/form/Form1.jsx?raw";
import form2Src from "./components/form/Form2.jsx?raw";
import background1Css from "./components/background/Background1.css?raw";
import background2Css from "./components/background/Background2.css?raw";
import background3Css from "./components/background/Background3.css?raw";
import card1Css from "./components/card/Card1.css?raw";
import card2Css from "./components/card/Card2.css?raw";
import gojoCss from "./components/card/gojo.css?raw";
import form1Css from "./components/form/Form1.css?raw";
import form2Css from "./components/form/Form2.css?raw";

function Home() {
  return (
    <div className="home-page">
      <LiquidChrome
        baseColor={[0.1, 0.2, 0.2]}
        speed={0.4}
        interactive={true}
      />
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}

function App() {
  return (
    // <Test/>
    <UIProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/components" element={<Component />}>
            <Route
              path="background1"
              element={
                <WithCode code={background1Src} css={background1Css}>
                  <Background1 />
                </WithCode>
              }
            />
            <Route
              path="background2"
              element={
                <WithCode code={background2Src} css={background2Css}>
                  <Background2 />
                </WithCode>
              }
            />
            <Route
              path="background3"
              element={
                <WithCode code={background3Src} css={background3Css}>
                  <Background3 />
                </WithCode>
              }
            />
            <Route
              path="card1"
              element={
                <WithCode code={card1Src} css={card1Css}>
                  <Card1 />
                </WithCode>
              }
            />
            <Route
              path="card2"
              element={
                <WithCode code={card2Src} css={card2Css}>
                  <Card2 />
                </WithCode>
              }
            />
            <Route
              path="gojo"
              element={
                <WithCode code={gojoSrc} css={gojoCss}>
                  <Gojo />
                </WithCode>
              }
            />
            <Route
              path="form1"
              element={
                <WithCode code={form1Src} css={form1Css}>
                  <Form1 />
                </WithCode>
              }
            />
            <Route
              path="form2"
              element={
                <WithCode code={form2Src} css={form2Css}>
                  <Form2 />
                </WithCode>
              }
            />
          </Route>
        </Routes>
      </Router>
    </UIProvider>
  );
}

export default App;
