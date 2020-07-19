import React from "react";
import "./App.css";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Influence from "./components/Influence";
import Gains from "./components/Gains";
import Started from "./components/Started";
import WhatItTakes from "./components/WhatItTakes";
import Steps from "./components/Steps";
import Clients from "./components/Clients";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Hero />
      <Contact />
      <Influence />
      <Gains />
      <Started />
      <WhatItTakes />
      <Steps />
      <Started />
      <Clients />
      <Started />
      <Footer />
    </div>
  );
}

export default App;
