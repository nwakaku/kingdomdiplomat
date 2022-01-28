import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./Components/Pages/LandingPage";
import Aos from "aos";
import Events from "./Components/Pages/Events";

const App = () => {
  Aos.init();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
      <Routes>
        <Route path="/events" element={<Events />} />
      </Routes>
    </Router>
  );
};

export default App;
