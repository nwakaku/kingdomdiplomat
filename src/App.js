import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./Components/Pages/LandingPage";
import Events from "./Components/Pages/Events";
import Location from "./Components/Pages/Location";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
      <Routes>
        <Route path="/events" element={<Events />} />
      </Routes>
      <Routes>
        <Route path="/location" element={<Location />} />
      </Routes>
    </Router>
  );
};

export default App;
