import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import MovieHome from "./components/MovieHome";
import MovieDetail from "./components/MovieDetail";
import LandingPage from "./components/LandingPage"; // <-- new

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/home"
          element={
            <>
              <Navbar />
              <MovieHome />
            </>
          }
        />
        <Route
          path="/movie/:id"
          element={
            <>
              <Navbar />
              <MovieDetail />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
