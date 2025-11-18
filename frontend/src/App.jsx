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

function Home() {
  return (
    <div className="home-page">
      <LiquidChrome />
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
            <Route path="background1" element={<Background1 />} />
            <Route path="background2" element={<Background2 />} />
            <Route path="background3" element={<Background3 />} />
            <Route path="card1" element={<Card1 />} />
            <Route path="card2" element={<Card2 />} />
            <Route path="gojo" element={<Gojo />} />
            <Route path="form1" element={<Form1 />} />
            <Route path="form2" element={<Form2 />} />
          </Route>
        </Routes>
      </Router>
    </UIProvider>
  );
}

export default App;
