import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/about";
import BracketBuilder from "./pages/bracket-builder";
import BracketBuilderPrivacy from "./pages/bracket-builder/privacy";
import NotFound from "./pages/NotFound";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/bracket-builder" element={<BracketBuilder />} />
        <Route
          path="/bracket-builder/privacy"
          element={<BracketBuilderPrivacy />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>{" "}
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
