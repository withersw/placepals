import React from 'react';
import { Link } from 'react-router-dom';
//import './Navbar.css'; // Optional: Create a CSS file for styling
import '../index.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>PLACE PALS</h1>
      <div className="navbar-list">
          <Link to="/profiles" className="navbar-link">Home</Link>
          <Link to="/profile" className="navbar-link">Profile</Link>
          <Link to="/messages" className="navbar-link">Messages</Link>
          <Link to="/login" className="navbar-link">Logout</Link>
      </div>
    </nav>
  );
};

export default Navbar;

{/* <li className="links">
<Link to="/" className="navbar-link">Home</Link>
</li>
<li className="links">
<Link to="/" className="navbar-link">Profile</Link>
</li>
<li className="links">
<Link to="/" className="navbar-link">Messages</Link>
</li> */}