import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="py-7 px-10 bg-emerald-700 justify-between flex items-center text-white">
      <h1 className="text-2xl">Header</h1>
      <div className="flex gap-10">
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Products">Products</Link>
        <Link to="/Services">Services</Link>
        <Link to="/Contact">Contact</Link>

        {/* Its mkae pages reload so that's why we use Links */}

        {/* <a className="text-xl underline" href="/">
          Home
        </a>
        <a className="text-xl underline" href="/About">
          About
        </a>
        <a className="text-xl underline" href="/Products">
          Products
        </a>
        <a className="text-xl underline" href="/Services">
          Services
        </a>
        <a className="text-xl underline" href="/Contact">
          Contact
        </a> */}
      </div>
    </div>
  );
};

export default Header;
