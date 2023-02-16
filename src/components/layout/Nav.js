import React from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navigation() {
  return (
    <Navbar bg="light" expand="lg" variant="light">
      <Navbar.Brand href="#home">The YAY Company</Navbar.Brand>
      <Navbar.Toggle
        className="navbar-toggle"
        aria-controls="basic-navbar-nav"
      />
      <Container className="container-links">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="news" className="nav-link">
              News
            </NavLink>
            <NavLink to="contact" className="nav-link">
              Contact
            </NavLink>
          </Nav>
          <Form className="d-flex navbar-form">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Go</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;