import { Link } from "react-router-dom";

import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const MyNavbar = () => {
  const themes2 = [
    {
      name: "SpongeBob",
    },
    {
      name: "DragonBall",
    },
    {
      name: "Naruto",
    },
  ];

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="my-navbar">
      <Navbar.Brand href="#home">Match Cartoons</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto ">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/rules">Rules</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <Link
              to={`/SpongeBob`}
              state={{ card: themes2[0] }}
              style={{ textDecorationColor: "black" }}
              className="dropdown-item"
            >
              Sponge Bob
            </Link>
            <Link
              to={`/DragonBall`}
              state={{ card: themes2[1] }}
              style={{ textDecorationColor: "black" }}
              className="dropdown-item"
            >
              Dragon Ball
            </Link>
            <Link
              to={`/Naruto`}
              state={{ card: themes2[2] }}
              style={{ textDecorationColor: "black" }}
              className="dropdown-item"
            >
              Naruto
            </Link>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
