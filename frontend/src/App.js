import React from "react";
import Addmovie from "./pages/Addmovie";
import Home from "./pages/Home";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Addmovie />
              <Home />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
