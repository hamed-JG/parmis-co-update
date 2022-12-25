import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Home from "./pages/Home";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";

import Navbar from "./Components/Navbar/Navbar";

import ScrollToTop from "./Components/Shared/ScrollToTop";


// Styles
import "./App.module.css";
import style from "./App.module.css";

function App() {
  return (
    <div className={style.App}>

      <Router>
        
          <Navbar />

          <ScrollToTop />

          <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/services" element={<Services />} />

              <Route path="/products" element={<Products />} />

              {/* <Route path="/blogs" element={<Blogs />} /> */}

              <Route path="/blogs/:slug" element={<Blog />} />

              <Route path="/contact" element={<Contact />} />
          </Routes>

          {/* <Footer /> */}

      </Router>

    </div>
  );
}

export default App;
