import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <header>
      <div className="headr">
        <div className="logo">
          <img src="BMW-M-Logo.png" alt="BMW Logo" height="70px" />
        </div>
        
        <button 
          className="mobile-menu-btn"
          onClick={() => setMenuActive(!menuActive)}
        >
          <i className="fa-solid fa-bars"></i>
        </button>
        
        <nav className={`navbar ${menuActive ? 'active' : ''}`}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/models">Models</Link></li>
            <li><Link to="/features">Features</Link></li>
            <li><Link to="/location">Location</Link></li>
          </ul>
        </nav>

        <div className="btn">
          <button>Buy Now <i className="fa-solid fa-car"></i></button>
          <button>Any Query</button>
        </div>
      </div>
    </header>
  );
};

export default Header;