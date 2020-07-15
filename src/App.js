import React from "react";
import "./App.css";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Influence from "./components/Influence";
import Gains from "./components/Gains";
import Started from "./components/Started";
import WhatItTakes from "./components/WhatItTakes";

function App() {
  return (
    <div className="App">
      <Hero />
      <Contact />
      <Influence />
      <Gains />
      <Started />
      <WhatItTakes />
    </div>
  );
}

export default App;
