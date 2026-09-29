import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from "../../assets/logo.png";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <section className="header">
      <nav>
        {/* Logo */}
        <Link to="/" onClick={closeMenu}>
          <img src={logo} alt="University Logo" />
        </Link>

        {/* Navigation Links */}
        <div className={`nav-links ${menuOpen ? "show-menu" : ""}`}>
          <i
            className="fa fa-times"
            onClick={closeMenu}
            aria-label="Close menu"
          ></i>

          <ul>
            <li>
              <Link to="/" onClick={closeMenu}>HOME</Link>
            </li>
            <li>
              <Link to="/about" onClick={closeMenu}>ABOUT</Link>
            </li>
            <li>
              <Link to="/courses" onClick={closeMenu}>COURSE</Link>
            </li>
            <li>
              <Link to="/blog" onClick={closeMenu}>BLOG</Link>
            </li>
            <li>
              <Link to="/contact" onClick={closeMenu}>CONTACT</Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <i
          className="fa fa-bars"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        ></i>
      </nav>

      {/* Hero Section */}
      <div className="text-box">
        <h1>World's Biggest University</h1>

        <p>
          Welcome to our university! We are dedicated to providing an
          excellent education and
          <br />
          fostering a vibrant community of learners and scholars.
        </p>

        <Link to="/courses" className="hero-btn">
          Visit us to know More
        </Link>
      </div>
    </section>
  );
};

export default NavBar;
