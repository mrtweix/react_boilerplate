/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const route = useLocation();
  const isActive = (r) => {
    if (r === route.pathname) {
      return "active";
    } else {
      return null;
    }
  };
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>
        <Link variant="success" className="nav-link navbar-brand" to="/">
          MERN Boilerplate
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle className="mx-3" aria-controls="basic-navbar-nav" />
      <Navbar.Collapse
        className="justify-content-end px-3"
        id="basic-navbar-nav"
      >
        <Nav>
          <Link
            variant="success"
            className={`nav-link ${isActive("/login")}`}
            to="/login"
          >
            Login
          </Link>
          <Link
            variant="success"
            className={`nav-link ${isActive("/register")}`}
            to="/register"
          >
            Register
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
