import React from "react";
import "./sass/style.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import News from "./pages/News/News";
import Contact from "./pages/Contact/Contact";
import Navigation from "./components/layout/Nav";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <div className="wrapper">
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="news" element={<News />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;