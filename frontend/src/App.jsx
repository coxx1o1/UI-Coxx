import React from "react";
import "./App.css";
import { UIProvider } from "./UIContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BackgroundMain from "./components/background/BackgroundMain.jsx";
import Header from "./components/Header.jsx";
import Nav from "./components/nav.jsx";
import Component from "./components/Component.jsx";
import LiquidChrome from "./components/LiquidChrome.jsx";
import Test from "./components/test.jsx";

function Home() {
  return (
    <div >
      <LiquidChrome />
    
      <Header />
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
        

        <Route path="/components" element={<Component />} />
      </Routes>
    </Router>
    </UIProvider>
  );
}

export default App;
