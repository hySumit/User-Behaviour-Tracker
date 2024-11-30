import React, { useState } from 'react';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          VistaarWebX
        </div>

        <ul className="navbar-menu">
          <li className="navbar-menu-item"><a href="#home">Home</a></li>
          <li className="navbar-menu-item"><a href="#about">About</a></li>
          <li className="navbar-menu-item"><a href="#services">Services</a></li>
          <li className="navbar-menu-item"><a href="#contact">Contact</a></li>
        </ul>

        
        <button 
          className="mobile-menu-toggle"
          onClick={toggleMenu}
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>

        
        {isOpen && (
          <div className="navbar-mobile-menu">
            <ul className="navbar-menu">
              <li className="navbar-menu-item"><a href="#home">Home</a></li>
              <li className="navbar-menu-item"><a href="#about">About</a></li>
              <li className="navbar-menu-item"><a href="#services">Services</a></li>
              <li className="navbar-menu-item"><a href="#contact">Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;