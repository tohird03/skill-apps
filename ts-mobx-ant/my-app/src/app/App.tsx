import React from "react";
import "../style/global.scss";
import { Router } from "../router/router";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Router />
    </HashRouter>
  );
}

export default App;
