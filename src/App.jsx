import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Products from "./Pages/Products";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Header from "./Components/Header";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Products" element={<Products />} />
        <Route path="Services" element={<Services />} />
        <Route path="Contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
