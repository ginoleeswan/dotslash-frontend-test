import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
      </Routes>
    </Router>
  );
}

export default App;
