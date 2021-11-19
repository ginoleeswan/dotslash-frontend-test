import React, { useState } from "react";
import rewayLogo from "../../images/Logo.svg";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  const [active, setActive] = useState("shoes");

  return (
    <Navbar
      bg="white"
      expand="lg"
      className="header-nav"
      onSelect={(selectedKey) => setActive(selectedKey)}
      fixed="top"
    >
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={rewayLogo}
            width="163.69"
            height="44.81"
            className="d-inline-block align-top"
            alt="Reway logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#apparels">Apparels</Nav.Link>
            <Nav.Link href="#shoes">Shoes</Nav.Link>
            <Nav.Link href="#equipment">Equipment</Nav.Link>
            <Nav.Link href="#gift">Gift</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div>
          <p>hello</p>
          <FontAwesomeIcon icon="fa-regular fa-gift" />
        </div>

        <Navbar.Collapse className="justify-content-end">
          <Nav.Link href="#signup">Sign Up</Nav.Link>
          <Button
            href="#login"
            className="btn-outline"
            variant="outline-primary"
          >
            Login
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
