import React from "react";
import "./App.css";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Influence from "./components/Influence";
import Gains from "./components/Gains";

function App() {
  return (
    <div className="App">
      <Hero />
      <Contact />
      <Influence />
      <Gains />
    </div>
  );
}

export default App;
