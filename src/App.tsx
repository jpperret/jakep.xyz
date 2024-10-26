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
      <div className="max-w-2xl m-auto p-3">
        <Routes>
          {allPages.map((page, i) => (
            <Route key={i} path={page.path} element={<page.element />} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
