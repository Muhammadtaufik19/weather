import React from "react";
import "./App.css";
import HalamanKanan from "./page/HalamanKanan";
import { HalamanKiri } from "./page/HalamanKiri";

import foto from "./assets/icon/sun.png";

function App() {
  return (
    <div className="App">
      <HalamanKiri />
      <HalamanKanan />
      {/* <img src={foto} alt="" /> */}
    </div>
  );
}

export default App;
