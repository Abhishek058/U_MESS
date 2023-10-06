import React from "react";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Boy from "./components/Boys/Boy";
import Girl from "./components/Girls/Girl";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/boys" element={<Boy />} />
        <Route path="/girls" element={<Girl />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
