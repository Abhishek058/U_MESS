import React from "react";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Boy from "./components/Boys/Boy";
import Girl from "./components/Girls/Girl";
import Tomorrow from "./components/Tomorrow";
import { menuB, menuG } from "./mess";
import Today from "./components/Today";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/boys" element={<Boy />} />
        <Route path="/girls" element={<Girl />} />
        <Route
          path="/boys/today"
          element={<Today menu={menuB} gender="boys" />}
        />
        <Route
          path="/girls/today"
          element={<Today menu={menuG} gender="girls" />}
        />
        <Route
          path="/boys/tomorrow"
          element={<Tomorrow menu={menuB} gender="boys" />}
        />
        <Route
          path="/girls/tomorrow"
          element={<Tomorrow menu={menuG} gender="girls" />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
