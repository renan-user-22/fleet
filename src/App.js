import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Enviado from "./components/enviado"; // Importe a nova página
import Home from "./Home"; // Página inicial

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/enviado" element={<Enviado />} /> {/* Nova rota */}
      </Routes>
    </Router>
  );
};

export default App;
