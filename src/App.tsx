import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NotFound from "./pages/NotFound";
import { allPages } from "./PageList";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="m-auto max-w-2xl p-3 pt-16">
        <Routes>
          {allPages.map((page, i) => (
            <Route
              key={page.path}
              path={page.path}
              element={<page.element />}
            />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
