import React from "react";
import "./App.css";
import {
  Navbar,
  Nav
} from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">{}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto nav-menu-center">
            <Nav.Link className="nav-link-center" href="#home">Home</Nav.Link>
            <Nav.Link className="nav-link-center" href="#about">About</Nav.Link>
            <Nav.Link className="nav-link-center" href="#education">Education</Nav.Link>
            <Nav.Link className="nav-link-center" href="#experience">Experience</Nav.Link>
            <Nav.Link className="nav-link-center" href="#projects">Projects</Nav.Link>
            <Nav.Link className="nav-link-center" href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="App-content">
        <h1>Hi, my name is Mridula Zaman.</h1>
        <h2>I'm a front-end web developer.</h2>
      </div>
    </div>
  );
}

export default App;
