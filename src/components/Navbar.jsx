
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const state = useSelector(state => state.handleCart);

  const navLinkStyle = {
    color: '#555',
    fontSize: '1.1rem',
    textTransform: 'uppercase',
    fontWeight: '600',
    padding: '0.5rem 1rem',
    transition: 'color 0.3s ease',
  };

  const navLinkHoverStyle = {
    color: '#007bff',
  };

  return (
    <nav className="navbar navbar-expand-lg py-3 shadow-lg sticky-top" style={{ backgroundColor: '#f8f9fa', borderBottom: '2px solid #000' }}>
      <div className="container">
        <NavLink className="navbar-brand fw-bold fs-3" to="/" style={{ letterSpacing: '1.5px', fontFamily: "'Poppins', sans-serif", textTransform: 'uppercase' }}>
          Velvet Cart
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 text-center">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                style={navLinkStyle}
                activeStyle={navLinkHoverStyle}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                style={navLinkStyle}
                activeStyle={navLinkHoverStyle}
                to="/product"
              >
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                style={navLinkStyle}
                activeStyle={navLinkHoverStyle}
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                style={navLinkStyle}
                activeStyle={navLinkHoverStyle}
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="buttons d-flex justify-content-center">
            <NavLink to="/login" className="btn btn-dark rounded-pill px-3 mx-2" style={{ transition: 'background-color 0.3s ease', color: '#fff' }}>
              <i className="fa fa-sign-in-alt me-1"></i> Login
            </NavLink>
            <NavLink to="/register" className="btn btn-dark rounded-pill px-3 mx-2" style={{ transition: 'background-color 0.3s ease', color: '#fff' }}>
              <i className="fa fa-user-plus me-1"></i> Register
            </NavLink>
            <NavLink to="/cart" className="btn btn-dark rounded-pill px-3 mx-2" style={{ transition: 'background-color 0.3s ease', color: '#fff' }}>
              <i className="fa fa-cart-shopping me-1"></i> Cart ({state.length})
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
