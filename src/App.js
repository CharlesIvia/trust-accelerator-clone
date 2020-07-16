import React from "react";
import "./App.css";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Influence from "./components/Influence";
import Gains from "./components/Gains";
import Started from "./components/Started";
import WhatItTakes from "./components/WhatItTakes";
import StepOne from "./components/StepOne";
import Clients from "./components/Clients";

function App() {
  return (
    <div className="App">
      <Hero />
      <Contact />
      <Influence />
      <Gains />
      <Started />
      <WhatItTakes />
      <StepOne />
      <Started />
      <Clients />
    </div>
  );
}

export default App;
