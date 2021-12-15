import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./view/Home";
import Header from "./view/Header";
import Hero from "./view/Hero";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<>
              <Header />
              <Hero />
            </>
          }
        />
        <Route path="/channels" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
