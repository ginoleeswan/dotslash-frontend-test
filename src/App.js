import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/style.scss";

import Home from "./pages";
import { ShoesProvider } from "./context/ShoesProvider";

function App() {
  return (
    <ShoesProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} exact />
        </Routes>
      </Router>
    </ShoesProvider>
  );
}

export default App;
