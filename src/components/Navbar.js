import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = ({ toggleTheme, theme }) => {
  return (
    <nav className="navbar">
      {/* Navigation Links */}
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
      
      {/* Theme toggle button */}
      <button onClick={toggleTheme} className="theme-toggle">
        {theme === 'dark' ? '🌙' : '☀️'}
      </button>
    </nav>
  );
};

export default Navbar;
