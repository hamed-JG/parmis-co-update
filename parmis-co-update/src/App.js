import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";

import Navbar from "./Components/Shared/Navbar/Navbar";
import Footer from "./Components/Shared/Footer/Footer";

import ScrollToTop from "./Components/Shared/Tools/ScrollToTop";


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

              <Route path="/aboutUs" element={<AboutUs />} />

              <Route path="/products" element={<Products />} />

              <Route path="/blogs/:slug" element={<Blog />} />

              <Route path="/contact" element={<Contact />} />
          </Routes>

          <Footer />

      </Router>

    </div>
  );
}

export default App;
