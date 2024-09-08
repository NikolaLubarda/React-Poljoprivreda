import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Pocetna from "./Components/Pocetna";
import ONama from "./Components/Onama/Onama"; // Importuj komponentu O Nama
import Shop from "./Components/Shop/Shop";
import KontaktPlus from "./Components/KontaktPlus/KontaktPlus";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        {/* Definiši rute */}
        <Route path="/" element={<Pocetna className="bg-green-10" />} />
        <Route path="/o-nama" element={<ONama />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/kontakt" element={<KontaktPlus />} />
      </Routes>
    </Router>
  );
}

export default App;
