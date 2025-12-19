import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <h1>AQ</h1>
          <span>Ajibade Qudirat</span>
        </div>
        <div className={`menu-icon ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="#home" className="nav-link" onClick={() => setIsOpen(false)}>Home</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link" onClick={() => setIsOpen(false)}>About</a>
          </li>
          <li className="nav-item">
            <a href="#skills" className="nav-link" onClick={() => setIsOpen(false)}>Skills</a>
          </li>
          <li className="nav-item">
            <a href="#experience" className="nav-link" onClick={() => setIsOpen(false)}>Experience</a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-link" onClick={() => setIsOpen(false)}>Projects</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link" onClick={() => setIsOpen(false)}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
