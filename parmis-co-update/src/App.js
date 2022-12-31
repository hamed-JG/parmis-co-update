import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import ABlog from "./Components/Blog/a Blog/ABlog";

import Navbar from "./Components/Shared/Navbar/Navbar";
import Footer from "./Components/Shared/Footer/Footer";
import CallToAction from './Components/Shared/Call to action/CallToAction'

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

          <Route path="/blog" element={<Blog />} />

          <Route path="/blog/:slug" element={<ABlog />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>

        <CallToAction/>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
