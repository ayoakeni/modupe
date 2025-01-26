import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/images/yabatech.png"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClickOutside = (event) => {
    if (!event.target.closest('.menu') && !event.target.closest('.hamburger')) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav>
      <Link className="logo" to="/" onClick={() => setMenuOpen(false)}>
      <img src={logo} alt="logo" />
      </Link>
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`line ${menuOpen ? 'open' : ''}`}></div>
        <div className={`line ${menuOpen ? 'open' : ''}`}></div>
        <div className={`line ${menuOpen ? 'open' : ''}`}></div>
      </div>
      <ul className={`menu ${menuOpen ? 'open' : ''}`}>
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About Me</Link>
        </li>
        <li>
          <Link to="/assignment" onClick={() => setMenuOpen(false)}>Assignments</Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Me</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
