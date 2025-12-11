import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext.jsx";
import { assets } from "../../assets/frontend_assets/assets.js";
import "./NavBar.css";

const NavBar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { getTotalCartAmount } = useContext(StoreContext);

  const navigate = useNavigate();

  const closeMenuAndSet = (name) => {
    setMenu(name);
    setIsOpen(false);

    // Scroll to top when Home is clicked
    if (name === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
      setSearchTerm("");
      setIsOpen(false); // close mobile menu if open
    }
  };

  return (
    <nav className="navbar">

      {/* LEFT - LOGO */}
      <div className="navbar-left">
        <Link 
          to="/" 
          className="logo-link"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img src={assets.logo} alt="logo" className="logo" />
        </Link>
      </div>

      {/* DESKTOP MENU */}
      <ul className="navbar-menu">
        <li>
          <Link to="/" className={menu === "home" ? "active" : ""} onClick={() => closeMenuAndSet("home")}>
            Home
          </Link>
        </li>
        <li>
          <a href="#explore-menu" className={menu === "menu" ? "active" : ""} onClick={() => closeMenuAndSet("menu")}>
            Menu
          </a>
        </li>
        <li>
          <a href="#app-download" className={menu === "mobile-app" ? "active" : ""} onClick={() => closeMenuAndSet("mobile-app")}>
            Mobile-App
          </a>
        </li>
        <li>
          <a href="#footer" className={menu === "contact" ? "active" : ""} onClick={() => closeMenuAndSet("contact")}>
            Contact Us
          </a>
        </li>
      </ul>

      {/* RIGHT SIDE */}
      <div className="navbar-right">

        {/* Search Form */}
        <form className="navbar-search-form" onSubmit={handleSearch}>
          <input 
            type="text" 
            placeholder="Search food..." 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)} 
            className="navbar-search-input"
          />
          <button type="submit" className="navbar-search-btn">
            <img src={assets.search_icon} alt="search" />
          </button>
        </form>

        {/* Cart */}
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="basket" className="icon" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"} />
        </div>

        {/* Sign In */}
        <button onClick={() => setShowLogin(true)} className="sign-in-btn">
          Sign In
        </button>

        {/* Hamburger (mobile only) */}
        <button className={`hamburger ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>

      {/* MOBILE DROPDOWN */}
      <ul className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={() => closeMenuAndSet("home")}>Home</Link>
        </li>
        <li>
          <a href="#explore-menu" onClick={() => closeMenuAndSet("menu")}>Menu</a>
        </li>
        <li>
          <a href="#app-download" onClick={() => closeMenuAndSet("mobile-app")}>Mobile-App</a>
        </li>
        <li>
          <a href="#footer" onClick={() => closeMenuAndSet("contact")}>Contact Us</a>
        </li>
      </ul>

    </nav>
  );
};

export default NavBar;
